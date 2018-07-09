import React, { Component } from 'react'
import { Member } from '../Member/Member'

export class Team extends Component {
  render () {
    return (
      <div>
        <h1>Team : {this.props.title}</h1>
        <div className='d-flex' style={{flexWrap: 'wrap'}}>
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </div>
    )
  }
}

export default Team
