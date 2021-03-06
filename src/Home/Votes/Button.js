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
    if (this.props.voted === this.props.children)
      return
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
    const voted = this.props.votes.includes(this.props.children) ? 'disabled' : ''
    return (
      <div className='col-6 text-center'>
        <button className={`vote-button ${style} ${voted}`} onClick={this.toggle} disabled={this.props.votes.includes(this.props.children)}>{this.props.children}</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} className="alert-modal"><p>Vote</p></ModalHeader>
          <ModalBody className="alert-modal">Vote <b style={{ color: '#ad1f26' }}>{this.props.children}</b> for <b>{this.props.type}</b> award ?</ModalBody>
          <ModalFooter className="alert-modal" style={{ textAlign: 'center', margin: 'auto' }}>
            <VoteButton color="primary" style={{ background: 'black' }} onClick={() => { this.handleClick(); this.toggle() }}>Confirm</VoteButton>
            <VoteButton color="danger" style={{ background: 'black' }} onClick={() => this.toggle()}>Cancel</VoteButton>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Button
