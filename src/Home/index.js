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
  constructor(props) {
    super(props)
    let vote = {}
    type.forEach((item) => {
      vote = { ...vote, [item]: null }
    })
    this.state = {
      vote
    }
  }
  componentDidMount() {
    auth.redirectIfNotLoggedIn()
    currentVote(window.localStorage.studentId, this)
  }

  getCard = (groupName, src, content) => {
    return (
      <Card style={{ width: '500px', height: '600px' }}>
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

  render() {
    const votecomponent = type.map((item, index) => {
      return <Vote key={`vote${index}`} title={item.toUpperCase()} voted={this.state.vote[item]} />
    })
    return (
      <div>
        <div className='text-center'>
          <h1 style={{
            letterSpacing: '13px',
            color: 'rgb(160,160,160)',
            WebkitTextStroke: '3px rgb(160,160,160)',
            marginTop: '25px',
          }}>EXCEED15</h1>
          <div style={{
            border: '2px solid lightgrey',
            width: '100%',
            maxWidth: '200px',
            margin: 'auto',
            padding: '5px 0 5px 0',
            borderRadius: '5px',
            marginTop: '25px',
          }}>{window.localStorage.studentId}</div>
          <Button
            className="logout"
            onClick={auth.logout}
            color="danger"
            style={{ marginTop: '10px' }}
          >
            Logout
            </Button>
        </div>
        <div style={{ marginTop: '10px' }}>
          <ImageSlider />
        </div>
        {votecomponent}
        <style>{`
          @media only screen and (min-width: 600px) {
             .logout {
                position: absolute;
                right: 10px;
                top: 0px;
            }
          }
        `}</style>
      </div >
    )
  }
}

export default Home
