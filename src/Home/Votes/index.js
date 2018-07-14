import React, { Component } from 'react'
import './index.css'
import { ButtonWrapper } from './ButtonWrapper'

export class index extends Component {
  render () {
    const style = { background: 'rgb(41,41,41)', color: 'white' }
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
