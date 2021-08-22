import React from 'react'
import { Input } from 'semantic-ui-react'
import { Grid, Segment, Header, Form, Label, Button, Icon } from 'semantic-ui-react'

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

const style = {
    segment: {
        marginBottom: '50px',
    },
    label: {
        border:'none',
        verticalAlign: 'middle',
    }
}

export default function CreateForm({ onCreate }) {

    function submitHandler(event) {
        event.preventDefault();
        onCreate({
            id: event.target.location.value,
            location: event.target.location.value,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        });
        event.target.reset();
    }
    return (
        <Grid textAlign='center' container columns={1}>
            <Segment raised compact color='blue' textAlign='center' style={style.segment}>
                <Form onSubmit={submitHandler}>
                    <Header as='h2'>Create Cookie Stand</Header>
                    <Form.Group>
                        <Form.Field inline>
                            <Label basic htmlFor="location" size={'big'} style={style.label}><Icon name='globe' />Location</Label>

                            <Input type="text" name="location" placeholder='Enter Store...' />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field inline>
                            <Label basic htmlFor="min-customers" size={'big'} style={style.label}><Icon name='user' />Min Customers per Hour</Label>

                            <Input type="number" name="min-customers" placeholder='Quantity' />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field inline>
                            <Label basic htmlFor="max-customers" size={'big'} style={style.label}><Icon name='users' />Max Customers per Hour</Label>

                            <Input type="number" name="max-customers" placeholder='Quantity' />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field inline>
                            <Label basic htmlFor="avg-cookies" size={'big'} style={style.label}><Icon name='dollar' />Average Cookies per Sale</Label>

                            <Input type="number" name="avg-cookies" step=".1" placeholder='Quantity' />
                        </Form.Field>
                    </Form.Group>
                    <Button fluid size={'big'} animated='fade' type="submit" color='blue'>
                        <Button.Content visible>Create</Button.Content>
                        <Button.Content hidden><Icon name='plus circle' /></Button.Content>
                    </Button>
                </Form >
            </Segment>
        </Grid>
    )
}
