import React, { Component } from 'react'
import * as firebase from "firebase";
import firebaseConfig from './Firebase/Config'

export class App extends Component {

    constructor() {
        super()
        this.state = {
            user: null,
            isLogin: false,
        }
    }
    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
        // Check if logged-in
            // ใช้รหัสนิสิต
        
        
    }
    
    render() {
        return (
        <div>
            Helloworld
        </div>
        )
    }
}

export default App
