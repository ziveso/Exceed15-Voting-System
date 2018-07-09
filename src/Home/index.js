import React from 'react'
import { redirectIfNotLoggedIn } from '../utils/auth'

class Home extends React.Component {
  componentDidMount () {
    redirectIfNotLoggedIn()
  }

  render () {
    return <h1>Home Page</h1>
  }
}

export default Home
