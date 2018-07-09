import React from 'react'
import { Alert, Jumbotron, Button } from 'reactstrap'
import auth from '../utils/auth'

class Vote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: auth.isLoggedIn()
    }
  }
  render () {
    return (
      <div>
        <Jumbotron>
          <h1>Group 1</h1>
        </Jumbotron>
      </div>
    )
  }
}

export default Vote
