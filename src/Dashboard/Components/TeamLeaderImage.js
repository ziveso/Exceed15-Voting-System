import React, { Component } from 'react'
import './TeamLeaderImage.css'

export class TeamLeaderImage extends Component {
  render() {
    return (
      <div id='team-leader-image' className='text-center'
        style={{ backgroundImage: 'url("https://placeimg.com/640/480/any")' }}>
        <span>{this.props.type}</span>
      </div>
    )
  }
}

export default TeamLeaderImage
