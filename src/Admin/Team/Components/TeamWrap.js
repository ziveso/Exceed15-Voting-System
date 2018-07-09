import React, { Component } from 'react'
import { Team } from './Team';

export class TeamWrap extends Component {
  render() {
    return (
      <div>
        <Team title="Team 1" />
        <Team title="Team 2" />
        <Team title="Team 3" />
        <Team title="Team 4" />
      </div>
    )
  }
}

export default TeamWrap
