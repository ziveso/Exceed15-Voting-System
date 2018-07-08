import React, { Component } from 'react'
import * as TeamManagment from './Team/CRUD/CRUD'

export class Index extends Component {
    constructor() {
      super()
      this.state = {
        teamname: ""
      }
      this.handleChangeTeamName = this.handleChangeTeamName.bind(this)
    }

    handleChangeTeamName(e) {
      this.setState( { teamname: e.target.value } )
    }

    render() {
      return (
        <div>
          <h1>I'm admin</h1>

          <input onChange={this.handleChangeTeamName} value={this.state.teamname} />
          <button onClick={ () => TeamManagment.createTeam(this.state.teamname) }>Create</button>


          <button onClick={ () => TeamManagment.getTeam(this.state.teamname) }>GET</button>


          <button onClick={ () => TeamManagment.deleteTeam(this.state.teamname) }>DELETE</button>
        </div>
      )
    }
}

export default Index
