import React, { Component } from 'react'
import * as firebase from 'firebase'
import firebaseConfig from './Firebase/Config'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { login, isLoggedIn, logout } from './utils/auth'
import LoginPage from './Login/Login'
import './App.css'
import { Index } from './Dashboard/Index'
import { Button } from 'reactstrap'
import Home from './Home'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      isLogin: false,
      id: ''
    }
    firebase.initializeApp(firebaseConfig)
  }

  componentDidMount () {
    const isLogged = isLoggedIn()
    if (isLogged) this.setState({ user: isLogged, isLogin: true })
  }

  login () {
    const id = login(this.state.id)
    if (id === -1) console.log('Throw modal')
    else this.setState({ user: id, isLogin: true })
  }

  logout () {
    logout()
    this.setState({ user: '', isLogin: false, id: '' })
  }

  render () {
    return (
      <Router>
        <div>
          {/* TODO */}
          {/* REACT ROUTER */}
          {/* ADMIN */}
          <Route path='/login'
            component={() => (
              <LoginPage
                id={this.state.id}
                login={this.login}
                logout={this.logout}
              />
            )}
          />
          <Route path='/' exact component={Home} />
          {/* USER */}
          <Route path='/' component={() => 'Vote'} />
          <Route path='/dashboard' component={Index} />
        </div>
      </Router>
    )
  }
}

export default App
