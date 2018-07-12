import React, { Component } from 'react'
import * as firebase from 'firebase'
import firebaseConfig from './Firebase/Config'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import auth from './utils/auth'
import LoginPage from './Login'
import './App.css'
import { Index } from './Dashboard/Index'
import Home from './Home'

export class App extends Component {
  constructor (props) {
    super(props)
    firebase.initializeApp(firebaseConfig)
  }

  render () {
    return (
      <Router>
        <div>
          {/* REACT ROUTER */}
          <Route path='/' exact component={Home} />

          <Route path='/login' component={LoginPage} />
          {/* USER */}
          <Route path='/dashboard' component={Index} />
        </div>
      </Router>
    )
  }
}

export default App
