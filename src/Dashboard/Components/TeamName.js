import React, { Component } from 'react'

export class TeamName extends Component {
  render() {
    return (
      <div className='d-flex' style={{
        justifyContent: 'space-between',
        border: '2px solid black',
        borderRadius: '25px',
        padding: '10px 20px',
        margin: '10px 20px',
        }}>
        <div>
          {this.props.rank} {this.props.name} 
        </div>
        <div>
          <span>{this.props.score} %</span>
        </div>
      </div>
    )
  }
}

export default TeamName
