import React, { Component } from 'react'
import './button.css'
import { vote } from '../../utils/vote'
import auth from '../../utils/auth';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button as VoteButton
} from 'reactstrap'
import { message } from 'antd'
import 'antd/dist/antd.css'

export class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({ modal: !this.state.modal })
  }
  handleClick = () => {
    if (auth.isLoggedIn()) {
      vote(window.localStorage.studentId, this.props.type, this.props.children)
      message.success(`Success! you have voted for ${this.props.children}`)
    } else {
      message.error(`Don't try to hack the HACKER :)`)
    }
  }
  render() {
    const style = this.props.voted === this.props.children ? 'is-active' : ''
    return (
      <div className='col-6 text-center'>
        <button className={`vote-button ${style}`} onClick={this.toggle}>{this.props.children}</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Vote</ModalHeader>
          <ModalBody>Vote <b style={{ color: 'blue' }}>{this.props.children}</b> for {this.props.type} award ?</ModalBody>
          <ModalFooter>
            <VoteButton color="primary" onClick={() => { this.handleClick(); this.toggle() }}>Confirm</VoteButton>
            <VoteButton color="danger" onClick={() => this.toggle()}>Cancel</VoteButton>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Button
