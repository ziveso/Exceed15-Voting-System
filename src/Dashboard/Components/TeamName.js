import React, { Component } from 'react'

export class TeamName extends Component {
  render() {
    return (
      <div className='d-flex' style={{
        justifyContent: 'space-between',
        border: '2px solid black',
        borderRadius: '20px',
        padding: '10px 20px',
        margin: '10px 20px',
        fontFamily: `'Athiti', sans-serif`,
        fontSize: '30px',
        background: 'white',
        }}>
        <div className='d-flex'>
          <img src={this.props.rank} style={{ marginTop: '5px', width: '44px', height: '44px' }} alt="medal"/>
          <div style={{ paddingTop: '5px', paddingLeft: '10px'}}>{this.props.name}</div>
        </div>
        <div style={{ paddingTop: '5px' }}>
          <span>{this.props.score} %</span>
        </div>
      </div>
    )
  }
}

export default TeamName
