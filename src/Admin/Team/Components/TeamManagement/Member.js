import React, { Component } from 'react'

export class Member extends Component {
  render () {
    return (
      <div className='row'>
        <img src='https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg' alt='profileImage' style={{ width: '32px', height: '32px'}} />
        <h5 style={{ marginLeft: '10px' }}>{this.props.name}</h5>
      </div>
    )
  }
}

export default Member
