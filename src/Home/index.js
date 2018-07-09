import React from 'react'
import auth from '../utils/auth'

class Home extends React.Component {
  componentDidMount () {
    auth.redirectIfNotLoggedIn()
  }

  render () {
    return <h1>Home Page</h1>
  }
}

export default Home
