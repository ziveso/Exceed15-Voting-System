import React, { Component } from 'react'
import './TeamLeaderImage.css'
import TeamImage from '../../image/team/original/DSC_3600.jpg'

export class TeamLeaderImage extends Component {
  render() {
    return (
      <div id='team-leader-image' className='text-center'
        style={{ backgroundImage: `url(${TeamImage})` }}>
        {/* style={{ background: 'white'}} > */}

        <span style={{ fontFamily: `'Fredoka One', cursive`, textShadow: '0 0 15px black'}}>
          {this.props.type.toUpperCase()}
        </span>
      </div>
    )
  }
}

export default TeamLeaderImage
