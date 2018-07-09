import React, { Component } from 'react'
import { ManageTeam } from './Team/ManageTeam';
import { TeamWrap } from './Team/TeamWrap';

export class Index extends Component {
    constructor() {
      super()
      this.state = {
        sidebar: 0,
      }
      this.handleChangeSideBar = this.handleChangeSideBar.bind(this)
    }

    handleChangeSideBar(index) {
      this.setState( { sidebar: index })
    }

    render() {

      const menus = [ 'Team', 'Team Managment', 'Dashboard' ]
      const menuscomponents = menus.map( (item,index) => {
          const isActive = this.state.sidebar === index ? 'isActive' : ''
          return <div style={{ width: '100%' }} onClick={ () => this.handleChangeSideBar(index) } className={`${isActive}`}>{ item }</div>
      } )

      return (
        <div>
          <div className="row">
            <div className="col-md-2 text-center" style={{ background:'black', color:'white'}}>
                { menuscomponents }
            </div>
            <div className="col-md-10">

                { this.state.sidebar === 0 ? <TeamWrap /> : null}
                { this.state.sidebar === 1 ? <ManageTeam /> : null}
            </div>
          </div>
        </div>
      )
    }
}

export default Index
