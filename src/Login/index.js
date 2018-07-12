import React from 'react'
import {
  InputGroup,
  Input,
  Button
} from 'reactstrap'
import auth from '../utils/auth'
import { withRouter } from 'react-router-dom'

const full = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

class Login extends React.Component {
  constructor (props) {
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

  render () {
    return (
      <div style={full}>
        <div className='p-2 w-100 text-center'>
          <h1>EXCEED 15th</h1>
          <form
            onSubmit={this.login}
            style={{
              maxWidth: '500px',
              margin: 'auto'
            }}
          >
            <InputGroup
              className='rounded mb-2'
              style={{
                height: '45px',
                borderRadius: '4px',
                boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* <InputGroupAddon addonType='prepend'>
                <InputGroupText>Student ID</InputGroupText>
              </InputGroupAddon> */}
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
            {this.state.error && (
              <div className='text-danger'>
                Invalid student ID!
              </div>
            )}
            <Button type='submit' className='mt-4' color='primary' block onClick={this.login}>
              Login
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
