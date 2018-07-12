import React, { Component } from 'react'
import { Button } from './Button'

export class ButtonWrapper extends Component {
  render () {
    const type = this.props.name
    const teamName = ['ske gogo', 'cpe gogo', 'ske gogo', 'cpe gogo', 'ske gogo', 'cpe gogo', 'ske gogo', 'cpe gogo',
      'ske gogo', 'cpe gogo', 'ske gogo', 'cpe gogo', 'ske gogo', 'cpe gogo', 'ske gogo', 'cpe gogo']

    const buttonComp = teamName.map((item, index) => {
      return <Button key={`button${index}`} type={type}>{item}</Button>
    })

    return (
      <div className='row'>
        {buttonComp}
      </div>
    )
  }
}

export default ButtonWrapper
