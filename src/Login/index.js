import React from 'react'
import {
  InputGroup,
  Input,
  Button
} from 'reactstrap'
import auth from '../utils/auth'
import { withRouter } from 'react-router-dom'
import background from '../image/login-background.jpg'
import './index.css'

const full = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      error: false
    }
  }

  handleChange = e => {
    this.setState({ id: e.target.value })
  }

  login = event => {
    if (event) {
      event.preventDefault()
    }

    if (auth.login(this.state.id)) {
      this.props.history.replace('/')
    } else {
      this.setState({
        id: '',
        error: true
      })
    }
  }

  render() {
    return (
      <div style={full}>
        <div className='p-2 w-100 text-center'>
          <div className='exceed-header'>Exceed 15<sup>th</sup></div>
          <form
            onSubmit={this.login}
            style={{
              maxWidth: '500px',
              margin: 'auto',
              marginTop: '20px'
            }}
          >
            <div className='exceed-btn-login'>
              <InputGroup
                className='rounded mb-2'
                style={{
                  height: '40px',
                  borderRadius: '4px',
                  boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Input
                  style={{
                    textAlign: 'center'
                  }}
                  type='number'
                  placeholder='Student ID'
                  value={this.state.id}
                  onChange={this.handleChange}
                />
              </InputGroup>
              <Button type='submit' className='mt-2' style={{ background: 'black' }} block onClick={this.login}>
                Login
              </Button>
              {this.state.error && (
                <div className='text-danger mt-2'>
                  Invalid student ID!
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
