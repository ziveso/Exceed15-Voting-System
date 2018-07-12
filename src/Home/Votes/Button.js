import React, { Component } from 'react'

export class Button extends Component {
  render () {
    return (
      <div className='col-6 text-center'>
        <button style={{ background: 'rgb(243,22,142)',
          color: 'white',
          borderRadius: '20px',
          padding: '5px 25px',
          border: '5px solid rgba(243,22,00,0.5)',
          marginTop: '20px' }}>{this.props.children}</button>
      </div>
    )
  }
}

export default Button
