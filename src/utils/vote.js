import * as firebase from 'firebase'
import { type as atype } from '../config/config'

const currentVote = (studentId, state) => {
  atype.forEach((item) => {
    firebase.database().ref('vote/vote/' + studentId + '/' + item).on('value', (snap) => {
      state.setState({ vote: { ...state.state.vote, [item]: snap.val() } })
    })
  })
}

const vote = async (studentId, type, team) => {
  firebase.database().ref('vote/vote/' + studentId + '/' + type.toLowerCase()).set(team)
}

export {
  currentVote,
  vote
}
