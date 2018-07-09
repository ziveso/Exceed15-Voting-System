import React, { Component } from 'react'
import * as firebase from 'firebase'
import firebaseConfig from './Firebase/Config'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Login, isLogin, Logout } from './Login/User'
import Admin from './Admin/Index'
import LoginPage from './Login/Login'
import './App.css'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	Button,
} from 'reactstrap'

export class App extends Component {
	constructor() {
		super()
		this.state = {
			user: '',
			isLogin: false,
			id: ''
		}
		firebase.initializeApp(firebaseConfig);
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		const isLogged = isLogin()
		if (isLogged)
			this.setState({ user: isLogged, isLogin: true })
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
					<Button onClick={() => console.log(this.state)}>Log state</Button>
					<Link to="/admin">หน้าแอดมินจ้า</Link>
					{/* TODO */}
					{/* REACT ROUTER */}
					{/* ADMIN */}
					<Route path='/admin' component={Admin} />
					<Route path='/login'
						component={() => <LoginPage
							id={this.state.id}
							login={this.login}
							logout={this.logout}
						/>}
					/>
					{/* USER */}
					{/* <Route path='/' /> */}
				</div>
			</Router>
		)
	}
}

export default App
