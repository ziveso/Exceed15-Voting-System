import React, { Component } from 'react'
// import * as firebase from "firebase";
// import firebaseConfig from './Firebase/Config'
import { Login , isLogin, Logout } from './Login/User'

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
        if(isLogged) {
            this.setState({ user: isLogged, isLogin: true })
        }
    }

    handleChange(e) {
        this.setState({ login:e.target.value })
    }
    
    render() {
        return (
            <div>
                { this.state.isLogin? <h1>Logged-in</h1>: <h1>Not Log-in</h1>}
                <input value={this.state.login} onChange={ this.handleChange }/>
                <button onClick={ () => Login(this.state.login) }>Login</button>
                
                <button onClick={ () => Logout() }>Logout</button>
            </div>
        )
    }
}

export default App
