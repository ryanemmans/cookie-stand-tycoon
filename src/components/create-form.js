import React from 'react';
import { Input } from 'semantic-ui-react';
import { Grid, Segment, Header, Form, Label, Button, Icon, Image } from 'semantic-ui-react';

const style = {
  segment: {
    marginBottom: '50px',
    marginLeft: '20px',
  },
  label: {
    border: 'none',
    verticalAlign: 'middle',
  },
  cookie: {
    filter: 'invert(40%) sepia(92%) saturate(4213%) hue-rotate(306deg) brightness(94%) contrast(86%)',
    marginTop: '15px',
  }
};

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
    <Grid fluid textAlign='center'>
      <Grid.Row>
        <Grid.Column width={7}>
          <Segment raised compact color='purple' textAlign='center' style={style.segment}>
            <Form onSubmit={submitHandler}>
              <Header as='h2'>Create Cookie Stand</Header>
              <Form.Group>
                <Form.Field inline>
                  <Label basic htmlFor="location" size={'large'} style={style.label}><Icon name='globe' />Location</Label>

                  <Input type="text" name="location" placeholder='Enter Store...' />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <Label basic htmlFor="min-customers" size={'large'} style={style.label}><Icon name='user' />Min Customers per Hour</Label>

                  <Input type="number" name="min-customers" placeholder='Quantity' />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <Label basic htmlFor="max-customers" size={'large'} style={style.label}><Icon name='users' />Max Customers per Hour</Label>

                  <Input type="number" name="max-customers" placeholder='Quantity' />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <Label basic htmlFor="avg-cookies" size={'large'} style={style.label}><Icon name='dollar' />Average Cookies per Sale</Label>

                  <Input type="number" name="avg-cookies" step=".1" placeholder='Quantity' />
                </Form.Field>
              </Form.Group>
              <Button fluid size={'big'} animated='fade' type="submit" color='yellow'>
                <Button.Content visible>Create</Button.Content>
                <Button.Content hidden><Icon name='plus circle' /></Button.Content>
              </Button>
            </Form >
          </Segment>
        </Grid.Column>
        <Grid.Column width={7} textAlign='center'>
          <Image src='https://www.nicepng.com/png/full/5-50567_cookie-vector-png-clipart-transparent-download-black-and.png' size='medium' verticalAlign='middle' style={style.cookie} />
        </Grid.Column>
      </Grid.Row>
    </Grid >
  );
}
