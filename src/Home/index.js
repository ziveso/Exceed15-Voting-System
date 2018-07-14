import React from 'react'
import auth from '../utils/auth'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'
import ImageSlider from './ImageSlider'
import Vote from './Votes/index'
import { currentVote } from '../utils/vote'
import { type } from '../config/config'

class Home extends React.Component {
  constructor (props) {
    super(props)
    let vote = {}
    type.forEach((item) => {
      vote = {...vote, [item]: null}
    })
    this.state = {
      vote
    }
  }
  componentDidMount () {
    auth.redirectIfNotLoggedIn()
    currentVote(window.localStorage.studentId, this)
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
    const votecomponent = type.map((item, index) => {
      return <Vote key={`vote${index}`} title={item.toUpperCase()} voted={this.state.vote[item]} />
    })
    return (
      <div>
        <div className='text-center'>
          <div>Home</div>
          <h1 style={{ letterSpacing: '13px',
            color: 'rgb(160,160,160)',
            WebkitTextStroke: '3px rgb(160,160,160)' }}>EXCEED15</h1>
          <div style={{ border: '2px solid black',
            width: '100%',
            maxWidth: '200px',
            margin: 'auto',
            padding: '5px 0 5px 0' }}>{ window.localStorage.studentId }</div>
          <button onClick={auth.logout}>Logout(mock)</button>
        </div>
        <div style={{ marginTop: '10px' }}>
          <ImageSlider />
        </div>

        { votecomponent }
        {/* {this.getCard('คสช', 'https://www.matichon.co.th/wp-content/uploads/2017/09/col01271258p1.jpg', '1. ประยุทธ 2. ประวิทย์ 3. ...')} */}
      </div>
    )
  }
}

export default Home
