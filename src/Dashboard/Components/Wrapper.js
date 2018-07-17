import React, { Component } from 'react'
import { LeaderCard } from './LeaderCard';
import { type as types } from '../../config/config'
import './Wrapper.css'

export class Wrapper extends Component {
  render() {
    const typecomponent = types.map( (type,index)=> {
        return <LeaderCard key={`leader${index}`} type={type} votes={this.props.votes[type]} />
    })
    return (
      <div>
          <div className='leaderboard-header'>LEADERBOARD</div>
          <div className='row'>
            {typecomponent}
          </div>
      </div>
    )
  }
}

export default Wrapper
