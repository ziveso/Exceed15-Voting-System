import React, { Component } from 'react'
import { Member } from './Member'
import { deleteTeam } from '../../CRUD/CRUD'

export class Team extends Component {
  render () {
    const member = ['ZivesO', 'Kykungz', 'Gear', 'WinChawakorn']
    const memberComponent = member.map((item, index) => {
      return <Member name={item} id={`member-${index}`} />
    })
    return (
      <div>
        <div className='row'>
          <h4>{ this.props.name }</h4>

          <button style={{ marginLeft: '10px', border: '1px solid red', color: 'black', borderRadius: '4px', background: '#f49e42', cursor: 'pointer' }}
          >
            <i className='fa fa-edit' aria-hidden='true' />
          </button>
          <button style={{ marginLeft: '10px', border: '1px solid red', color: 'red', borderRadius: '4px', background: 'lightyellow', cursor: 'pointer' }}
            onClick={() => deleteTeam(this.props.teamname)}>
            <i className='fa fa-trash' aria-hidden='true' />
          </button>
        </div>
        <div className='container'>
          { memberComponent }
        </div>
      </div>
    )
  }
}

export default Team
