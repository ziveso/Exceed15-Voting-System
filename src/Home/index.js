import React from 'react'
import auth from '../utils/auth'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'

class Home extends React.Component {
  componentDidMount () {
    auth.redirectIfNotLoggedIn()
  }

  getCard = (groupName, src, content) => {
    return (
      <Card style={{width: '500px', height: '600px'}}>
        <CardImg top src={src} alt={groupName} />
        <CardBody>
          <CardTitle>{groupName}</CardTitle>
          <CardText>{content}</CardText>
          <Button>Button</Button>{' '}
          <Button>Button</Button>
        </CardBody>
      </Card>
    )
  }

  render () {
    return (
      <div>
        {this.getCard('คสช', 'https://www.matichon.co.th/wp-content/uploads/2017/09/col01271258p1.jpg', '1. ประยุทธ 2. ประวิทย์ 3. ...')}
      </div>
    )
  }
}

export default Home
