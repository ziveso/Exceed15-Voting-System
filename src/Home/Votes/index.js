import React, { Component } from 'react'
import './index.css'

export class index extends Component {
  render () {
    const style = { background: 'rgb(166,245,219)' }
    return (
      <div id='vote'>
        <div className='container' style={style}>
          <div className='row'>
            <div className='col-md-5'>
              <span className='title'>{this.props.title}</span>
            </div>
            <div className='col-md-7'>
              <div style={{ background: 'black', minHeight: '500px', width: '104%' }}>
                <h1 style={{ color: 'white' }}>background image</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
