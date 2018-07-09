import React, { Component } from 'react'
import { Team } from './Team/Team';

export class Index extends Component {
    constructor() {
      super()
      this.state = {
        sidebar: 0,
      }
      this.handleChangeTeamName = this.handleChangeTeamName.bind(this)
    }

    handleChangeTeamName(e) {
      this.setState( { teamname: e.target.value } )
    }

    render() {
      return (
        <div>
          <div className="row">
            <div className="col-md-2">
                <div>Team Managment</div>
                {/* Switch Dashboard to top */}
                <div>Dashboard</div>
            </div>
            <div className="col-md-10">
                { this.state.sidebar === 0 ? <Team /> : null}
            </div>
          </div>
        </div>
      )
    }
}

export default Index
