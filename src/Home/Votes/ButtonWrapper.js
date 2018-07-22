import React, { Component } from 'react'
import { Button } from './Button'
import { teamname } from '../../config/config'

export class ButtonWrapper extends Component {
  render () {
    const type = this.props.type
    const buttonComp = teamname.map((item, index) => {
      return <Button key={`button${index}`} votes={this.props.votes} voted={this.props.voted} type={type}>{item}</Button>
    })

    return (
      <div className='row mb-4'>
        {buttonComp}
      </div>
    )
  }
}

export default ButtonWrapper
