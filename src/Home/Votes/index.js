import React, { Component } from 'react'
import './index.css'
import { ButtonWrapper } from './ButtonWrapper'

export class index extends Component {
  render () {
    const style = { background: 'rgba(255, 255, 255,0.4)', color: 'white', boxShadow: '0px 0px 15px #888888' }
    return (
      <div id='vote'>
        <div className='container' style={style}>
          <div className='row'>
            <div className='col-12 col-md-5 title text-center'><span>{this.props.title}</span></div>
            <div className='col-12 col-md-7'><ButtonWrapper voted={this.props.voted} type={this.props.title} /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
