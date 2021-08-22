import React from 'react'
import { Grid, Table } from 'semantic-ui-react'

const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
]

const sizes = [
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'big',
    'huge',
    'massive',
]

export default function ReportTable(props) {

    if (props.reports.length === 0) {
        return <h2>No Cookie Stands Available</h2>
    }
    const headers = ['Location', ...props.hours, 'Totals'];

    return (
        <Grid textAlign='center' container columns={1}>
            <Table collapsing selectable color={'blue'} key={'blue'} size='large'>
                <HeaderRow headerValues={headers} />

                <Table.Body>
                    {props.reports.map(report => {
                        return <ReportRow key={report.id} report={report} />;
                    })}
                </Table.Body>

                <FooterRow reports={props.reports} />

            </Table>
        </Grid>
    );
}

function HeaderRow({ headerValues }) {
    return (
        <Table.Header>
            <Table.Row>
                {headerValues.map((header, index) => {
                    return <Table.HeaderCell textAlign='center' key={index}>{header}</Table.HeaderCell>;
                })}
            </Table.Row>
        </Table.Header>
    );
}

function ReportRow({ report }) {

    const total = report.hourly_sales.reduce((sum, value) => sum + value);

    const values = [report.location, ...report.hourly_sales, total];

    return (

        <Table.Row>
            {values.map((value, i) => <Table.Cell textAlign='center' key={i}>{value}</Table.Cell>)}
        </Table.Row>
    );
}

function FooterRow({ reports }) {

    const cellValues = ['Totals'];

    let megaTotal = 0;

    for (let i in reports[0].hourly_sales) {

        let hourlyTotal = 0;

        for (let report of reports) {
            hourlyTotal += report.hourly_sales[i];
        }

        cellValues.push(hourlyTotal);

        megaTotal += hourlyTotal;
    }

    cellValues.push(megaTotal);

    return (
        <Table.Footer>
            <Table.Row>
                {cellValues.map((value, index) => {
                    return <Table.HeaderCell textAlign='center' key={index}>{value}</Table.HeaderCell>;
                })}
            </Table.Row>
        </Table.Footer>
    );
}
