import React, { Component } from 'react'
// import * as firebase from "firebase";
// import firebaseConfig from './Firebase/Config'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login, isLogin, Logout } from './Login/User'
import './App.css'

export class App extends Component {

  constructor() {
    super()
    this.state = {
      user: '',
      isLogin: false,
      id: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    const isLogged = isLogin()
    if (isLogged)
      this.setState({ user: isLogged, isLogin: true })
  }

  handleChange(e) {
    this.setState({ id: e.target.value })
  }

  login() {
    const id = Login(this.state.id)
    if (id === -1)
      console.log('Throw modal')
    else
      this.setState({ user: id, isLogin: true })
  }

  logout() {
    Logout()
    this.setState({ user: '', isLogin: false, id: '' })
  }

  render() {
    return (
      <Router>
        <div>
          {/* Navbar */}
          <div className='nav' style={{ padding: '20px' }}>
            <h2 style={{ marginLeft: '50px' }}>EXCEED 15th</h2>
            <div style={{ marginLeft: '50px' }}>
              {this.state.isLogin ?
                <div style={{ display: 'flex' }}>
                  <h5 style={{ margin: 'auto', color: 'yellow' }}>{this.state.user}</h5>
                  <Button color='danger' className="nav-button" onClick={() => this.logout()}>Logout</Button>
                </div>
                : <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <InputGroup size="sm" style={{ width: '240px', height: '40px', marginBottom: '10px', }}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Student ID</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Student ID" value={this.state.id} onChange={this.handleChange} />
                  </InputGroup>
                  <Button color='primary' className="nav-button" onClick={() => this.login()}>Login</Button>
                </div>}
            </div>
          </div>
          <Button onClick={() => console.log(this.state)}>Log state</Button>

          {/* TODO */}
          {/* REACT ROUTER */}
          {/* ADMIN */}
          {/* <Route path='/admin' /> */}
          {/* USER */}
          {/* <Route path='/' /> */}
        </div>
      </Router>
    )
  }
}

export default App
