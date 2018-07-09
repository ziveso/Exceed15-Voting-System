import React from 'react'
import { InputGroup, InputGroupAddon, Input, InputGroupText, Button } from 'reactstrap'

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
      id: ''
    }
  }

  handleChange = (e) => {
    this.setState({ id: e.target.value })
  }

  render () {
    return (
      <div style={full}>
        <div>
          <h1>EXCEED 15th</h1>
          <div style={{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          }}>
            <InputGroup style={{ width: '300px', height: '45px', marginBottom: '10px' }}>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>Student ID</InputGroupText>
              </InputGroupAddon>
              <Input placeholder='Input Student ID' value={this.state.id} onChange={this.handleChange} />
            </InputGroup>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
