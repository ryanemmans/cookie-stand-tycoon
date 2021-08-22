import { Component } from 'react'
import Header from './components/header'
import CreateForm from './components/create-form'
import ReportTable from './components/report-table'
import Footer from './components/footer'
import { hours } from './data'
import { Container, Grid } from 'semantic-ui-react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      standReports: []
    }
  }

  handleCreate = (standData) => {
    const standReports = [...this.state.standReports, standData];
    this.setState({ standReports });
  }

  render() {
    return (
      <Container>
      <Grid textAlign='center' verticalAlign='middle' container columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CreateForm onCreate={this.handleCreate} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ReportTable hours={hours} reports={this.state.standReports} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Footer reports={this.state.standReports} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
    );
  }
}

export default App;
