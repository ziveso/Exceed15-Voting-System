import React, { Component } from 'react'
import * as TeamManagment from './CRUD/CRUD'

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
            <h3>TeamManagment</h3>

            <input onChange={this.handleChangeTeamName} value={this.state.teamname} />
            <button onClick={ () => TeamManagment.createTeam(this.state.teamname) }>Create</button>
            <button onClick={ () => TeamManagment.getTeam(this.state.teamname) }>GET</button>
            <button onClick={ () => TeamManagment.deleteTeam(this.state.teamname) }>DELETE</button>

            <div>
                <h4>Teamname</h4>
                <div className="container">
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                </div>

                <h4>Teamname</h4>
                <div className="container">
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                </div>

                <h4>Teamname</h4>
                <div className="container">
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                </div>

                <h4>Teamname</h4>
                <div className="container">
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                    <h5>Member 1 name</h5>
                </div>
            </div>
            
        </div>
        )
    }
}

export default ManageTeam
