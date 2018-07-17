import React, { Component } from 'react'
import firebase from 'firebase/app'
import students from '../config/studentId'
import sortObj from 'sort-object'
import { Wrapper } from './Components/Wrapper'
import { type as types, teamname } from '../config/config';
import 'firebase/database'

export class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      votes: {},
    }
  }

  componentDidMount() {
    firebase.database().ref('/vote/vote').on('value', snap => {
      this.setState({ votes: snap.val() })
    })
  }

  count() {
    let count = {}
    types.forEach((type) => {
      count[type] = {}
      teamname.forEach((team) => {
        count[type][team] = 0
      })
    })

    const voted_id = Object.keys(this.state.votes)
    const vote = voted_id.map( id => {
      return this.state.votes[id]
    })

    let result = {}
    // initialize
    types.forEach( (type) => {
      result = { ...result,[type]: [] }
    })
    types.forEach( (type) => {
      vote.forEach( (v) => {
        result = {...result, [type]: [...result[type] ,v[type]]}
      })
    })
    Object.keys(result).forEach((type) => {
      result[type].forEach((team) => {
        count = { ...count, [type]: { ...count[type], [team]: count[type][team] + 1 } }
      })
    })
    return count
  }

  render() {
    const count = this.count()
    return (
      <div>
        <Wrapper votes={count}/>
      </div>
    )
  }
}

export default Index
