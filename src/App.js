import React, { Component } from 'react'
// import * as firebase from "firebase";
// import firebaseConfig from './Firebase/Config'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login, isLogin, Logout } from './Login/User'

export class App extends Component {

    constructor() {
        super()
        this.state = {
            user: null,
            isLogin: false,
            login: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        const isLogged = isLogin()
        if (isLogged) {
            this.setState({ user: isLogged, isLogin: true })
        }
    }

    handleChange(e) {
        this.setState({ login: e.target.value })
    }

    render() {
        return (
            <Router>
                <div>
                    {/* Navbar */}
                    {this.state.isLogin ? <h1>Logged-in</h1> : <h1>Not Log-in</h1>}
                    <input value={this.state.login} onChange={this.handleChange} />
                    {/* แยก component มี state เป็นของตัวเอง */}
                    <button onClick={() => Login(this.state.login)}>Login</button>
                    {/* แยก component มี state เป็นของตัวเอง */}
                    <button onClick={() => Logout()}>Logout</button>
                    {/* อย่าลืม update state ใน class นี้เพื่อ จะได้เอาไปเปลี่ยน navbar */}



                    {/* TODO */}
                    {/* REACT ROUTER */}
                    {/* ADMIN */}
                    {/* <Route path='/admin' /> */}
                    {/* USER */}
                    {/* <Route path='/' /> */}
                    {/*EIEI*/}
                </div>
            </Router>
        )
    }
}

export default App
