import React, { Component } from 'react'
import './button.css'
import { vote } from '../../utils/vote'
import auth from '../../utils/auth';

export class Button extends Component {
  handleClick = () => {
    if(auth.isLoggedIn())
      vote(window.localStorage.studentId, this.props.type, this.props.children)
  }
  render () {
    const style = this.props.voted === this.props.children ? 'is-active' : ''
    return (
      <div className='col-6 text-center'>
        <button className={`vote-button ${style}`} onClick={this.handleClick}>{this.props.children}</button>
      </div>
    )
  }
}

export default Button
