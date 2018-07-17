import React, { Component } from 'react'

export class TeamName extends Component {
  render() {
    return (
      <div className='text-center' 
        style={{ 
            border: '2px solid black',
            borderRadius: '25px',
            padding: '10px 0',
            margin: '10px 20px'}}>
        {this.props.rank} {this.props.name} {this.props.score}
      </div>
    )
  }
}

export default TeamName
