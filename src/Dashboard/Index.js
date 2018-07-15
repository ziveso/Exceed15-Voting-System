import React, { Component } from 'react'
import firebase from 'firebase/app'
import students from '../config/studentId'
import 'firebase/database'
// import { type as types, teamname } from '../config/config';

export class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      votes: {},
    }
    this.count = this.count.bind(this)
  }

  componentDidMount() {
    firebase.database().ref('/vote/vote').on('value', snap => {
      this.setState({ votes: snap.val() })
    })
  }

  // count() {
  //   const voted_id = Object.keys(this.state.votes)
  //   const vote = voted_id.map( id => {
  //     return this.state.votes[id]
  //   })

  //   let result = {}
  //   // initialize
  //   types.forEach( (type) => {
  //     result = { ...result,[type]: [] }
  //   })
  //   types.forEach( (type) => {
  //     vote.forEach( (v) => {
  //       result = {...result, [type]: [...result[type] ,v[type]]}
  //     })
  //   })
  //   console.log(result)
  // }

  render() {
    // this.count()
    return (
      <div>
        <div>Total vote</div>
        <div>{Object.keys(this.state.votes).length} / {students.length}</div>
        { JSON.stringify(this.state.votes) }
      </div>
    )
  }
}

export default Index
