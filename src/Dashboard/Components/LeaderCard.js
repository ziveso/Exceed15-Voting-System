import React, { Component } from 'react'
import { TeamName } from './TeamName'
import { TeamLeaderImage } from './TeamLeaderImage'
import _ from 'underscore'
import firstMedal from '../../image/medal/first.svg'
import secondMedal from '../../image/medal/second.svg'
import thirdMedal from '../../image/medal/third.svg'

export class LeaderCard extends Component {
  render() {
    var arr = Object.keys(this.props.votes).map((item) => {
      return { name: item, value: this.props.votes[item] }
    });

    let count = 0
    Object.keys(this.props.votes).forEach((vote) => {
      if (this.props.votes[vote] !== undefined) {
        count += this.props.votes[vote] ? this.props.votes[vote] : 0
      }
    })

    arr = _.sortBy(arr, (item) => { return -(item.value) })
    return (
      <div className='col-12 col-md-3 mb-4'>
        <div style={{ paddingBottom: '10px', borderRadius: '15px', background: 'rgba(255,255,255,0.5)', borderTop: 'none', marginBottom: '10px' }}>
          <TeamLeaderImage teamname={arr[0].name} type={this.props.type} />
          <div style={{ marginTop: '13px' }}>
            <TeamName rank={firstMedal} name={arr[0].name} score={(arr[0].value / count * 100).toFixed(2)} />
            <TeamName rank={secondMedal} name={arr[1].name} score={(arr[1].value / count * 100).toFixed(2)} />
            <TeamName rank={thirdMedal} name={arr[2].name} score={(arr[2].value / count * 100).toFixed(2)} />
          </div>
        </div>
      </div>
    )
  }
}

export default LeaderCard
