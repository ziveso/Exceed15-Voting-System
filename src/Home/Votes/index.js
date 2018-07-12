import React, { Component } from 'react'
import './index.css'
import { ButtonWrapper } from './ButtonWrapper'

export class index extends Component {
  render () {
    const style = { background: 'rgb(166,245,219)' }
    return (
      <div id='vote'>
        <div className='container' style={style}>
          <div className='row'>
            <div className='col-md-5 text-center'>
              <span className='title'>{this.props.title}</span>
            </div>
            <div className='col-md-7'>
              <div style={{ background: 'cyan', minHeight: '500px', width: '100%' }}>
                <ButtonWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
