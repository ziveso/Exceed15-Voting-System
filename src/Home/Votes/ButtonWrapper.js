import React, { Component } from 'react'
import { Button } from './Button'

export class ButtonWrapper extends Component {
  render () {
    const type = this.props.type
    const teamName = ['ske0 gogo', 'cpe0 gogo', 'ske1 gogo', 'cpe1 gogo', 'ske2 gogo', 'cpe2 gogo', 'ske3 gogo', 'cpe3 gogo',
      'ske4 gogo', 'cpe4 gogo', 'ske5 gogo', 'cpe5 gogo', 'ske6 gogo', 'cpe6 gogo', 'ske7 gogo', 'cpe7 gogo']

    const buttonComp = teamName.map((item, index) => {
      return <Button key={`button${index}`} voted={this.props.voted} type={type}>{item}</Button>
    })

    return (
      <div className='row mb-4'>
        {buttonComp}
      </div>
    )
  }
}

export default ButtonWrapper
