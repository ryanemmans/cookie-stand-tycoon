import { Header } from 'semantic-ui-react'

const style = {
    h1: {
      margin: '40px',
      fontSize: '3em',
      textTransform: 'uppercase',
      backgroundColor: '#f9fafb',
      borderRadius: '5px',
      border: '1px solid #dfdfdf',
      borderTop: '2px solid #2085d0',
    },
  }

export default function HeaderTitle() {
    return (
        <Header as='h1' color='blue' style={style.h1}>Cookie Stand Admin
        </Header>
    );
}
