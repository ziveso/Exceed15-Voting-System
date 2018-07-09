import React from 'react'
import { InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
    }
  }

  handleChange(e) {
    this.setState({ id: e.target.value })
  }

  render() {
    return (
      <div style={{
        background: 'linear-gradient(to right, black, blue)',
      }}>
        <h1>EXCEED 15th</h1>
        <InputGroup size="sm" style={{ width: '240px', height: '40px', marginBottom: '10px', }}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Student ID</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Input Student ID" value={this.state.id} onChange={this.handleChange} />
        </InputGroup>
      </div >
    )
  }
}

export default Login