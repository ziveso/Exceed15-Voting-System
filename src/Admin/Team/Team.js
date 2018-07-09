import React, { Component } from 'react'
import * as TeamManagment from './CRUD/CRUD'

export class Team extends Component {
    constructor() {
        super()
        this.state = {
            teamname: "",
        }
    }
    render() {
        return (
        <div>
            <h3>TeamManagment</h3>
            <input onChange={this.handleChangeTeamName} value={this.state.teamname} />
            <button onClick={ () => TeamManagment.createTeam(this.state.teamname) }>Create</button>


            <button onClick={ () => TeamManagment.getTeam(this.state.teamname) }>GET</button>


            <button onClick={ () => TeamManagment.deleteTeam(this.state.teamname) }>DELETE</button>
        </div>
        )
    }
}

export default Team
