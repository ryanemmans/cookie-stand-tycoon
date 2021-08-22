import { Header } from 'semantic-ui-react'

const style = {
    h1: {
      margin: '50px',
      fontSize: '3em',
      textTransform: 'uppercase',
    },
  }

export default function HeaderTitle() {
    return (
        <Header as='h1' color='blue' style={style.h1}>Cookie Stand Admin
        </Header>
    );
}
