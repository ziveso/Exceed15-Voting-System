import React, { Component } from 'react'
import { TeamName } from './TeamName'
import { TeamLeaderImage } from './TeamLeaderImage'
import _ from 'underscore'

export class LeaderCard extends Component {
  render() {
    var arr = Object.keys(this.props.votes).map( (item) => {
        return { name: item, value: this.props.votes[item]}
    });
    arr = _.sortBy(arr, (item) => { return -(item.value) })
    return (
      <div className='col-md-4'>
        <div style={{ border: '1px solid rgb(230,230,230)', borderTop: 'none', marginBottom: '10px'}}>
            <TeamLeaderImage teamname={arr[0].name} type={this.props.type} />
            <TeamName rank='1st' name={arr[0].name} score={arr[0].value} />
            <TeamName rank='2nd' name={arr[1].name} score={arr[1].value} />
            <TeamName rank='3rd' name={arr[2].name} score={arr[2].value} />
        </div>
      </div>
    )
  }
}

export default LeaderCard
