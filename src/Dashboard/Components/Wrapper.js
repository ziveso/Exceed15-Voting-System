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
      <div style={{ marginTop: '0', marginLeft: '40px' }}>
          <div style={{
                      position:'fixed',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100vh',
                      zIndex: '-1',
                      // backgroundImage: `url('https://i.pinimg.com/originals/ee/98/b5/ee98b5f8d2f4248f76d6c457f190a414.jpg')`,
                      // backgroundSize: 'contain',
                      }}>
              <img style={{ width: '100%', height: '100vh'}} src='https://i.pinimg.com/originals/ee/98/b5/ee98b5f8d2f4248f76d6c457f190a414.jpg' alt='background'/>
          </div>
          <div className='leaderboard-header'>LEADERBOARD</div>
          <div className='row justify-content-center'>
            {typecomponent}
          </div>
      </div>
    )
  }
}

export default Wrapper
