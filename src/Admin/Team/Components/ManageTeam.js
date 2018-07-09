import React, { Component } from 'react'
import * as TeamManagment from '../CRUD/CRUD'
import { Team } from './TeamManagement/Team';

export class ManageTeam extends Component {
    constructor() {
        super()
        this.state = {
            teamname: "",
        }
        this.handleChangeTeamName = this.handleChangeTeamName.bind(this)
    }

    handleChangeTeamName(e) {
        this.setState({ teamname: e.target.value })
    }
    render() {
        return (
        <div>
            <h3>TeamManagement</h3>

            <input onChange={this.handleChangeTeamName} value={this.state.teamname} />
            <button onClick={ () => TeamManagment.createTeam(this.state.teamname) }>Create</button>
            {/* <button onClick={ () => TeamManagment.getTeam(this.state.teamname) }>GET</button> */}
            

            <div>
                <Team name="Team 1" />

                <Team name="Team 2" />

                <Team name="Team 3" />
            </div>
            
        </div>
        )
    }
}

export default ManageTeam
