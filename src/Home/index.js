import React from 'react'
import auth from '../utils/auth'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'
import ImageSlider from './ImageSlider'
import Vote from './Votes/index'

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
        <div className='text-center'>
          <div>Home</div>
          <h1 style={{ letterSpacing: '13px',
            color: 'rgb(160,160,160)',
            webkitTextStroke: '3px rgb(160,160,160)' }}>EXCEED15</h1>
          <div style={{ border: '2px solid black',
            width: '100%',
            maxWidth: '200px',
            margin: 'auto',
            padding: '5px 0 5px 0' }}>STUDENT ID</div>
        </div>
        <div style={{ marginTop: '10px' }}>
          <ImageSlider />
        </div>

        <Vote title='SOFTWARE' />
        <Vote title='HARDWARE' />
        <Vote title='DESIGN' />
        {/* {this.getCard('คสช', 'https://www.matichon.co.th/wp-content/uploads/2017/09/col01271258p1.jpg', '1. ประยุทธ 2. ประวิทย์ 3. ...')} */}
      </div>
    )
  }
}

export default Home
