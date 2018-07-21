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
import './index.css'
import background from '../image/1111.jpg'

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
          <div>
            <div style={{
              letterSpacing: '13px',
              // WebkitTextStroke: '1px black',
              marginTop: '25px',
              fontSize: '2.5em',
              color: 'white',
              textShadow: 'green 0px 0px 10px, orange 0px 0px 24px'
            }}><b>EXCEED15</b></div>
          </div>
          <div style={{
            border: '2px solid lightgrey',
            width: '100%',
            maxWidth: '200px',
            margin: 'auto',
            padding: '5px 0 5px 0',
            borderRadius: '5px',
            background: 'white'
          }}>{window.localStorage.studentId}</div>
          <Button
            className="logout"
            onClick={auth.logout}
            style={{ marginTop: '10px', 
                    position: 'absolute',
                    left: '10px',
                    border: 'none',
                    boxShadow: '0px 0px 10px black',
                    background: 'rgba(0,0,0,0.8)' }}
          >
            Logout
            </Button>
        </div>

        <div style={{ position: 'fixed', top: '0', left: '0', width: '45%', height: '100vh', zIndex: '-99', background: 'rgb(224,229,225)' }}>
        </div>
        <div style={{ position: 'fixed', top: '0', left: '45%', width: '55%', height: '100vh', zIndex: '-99' }}>
          <div style={{ backgroundImage: `url(${background})`, width: '100%', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
          </div>
       
        <div style={{  margin: 'auto' ,marginTop: '40px', width: '100%', maxWidth: '750px'}}>
          <ImageSlider />
        </div>
        <div style={{marginBottom: '20px'}}>
          {votecomponent}
        </div>
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
