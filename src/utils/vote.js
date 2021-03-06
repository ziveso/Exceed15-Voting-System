import firebase from 'firebase/app';
import { type as atype } from '../config/config'
import 'firebase/database';

const currentVote = (studentId, state) => {
  atype.forEach((item) => {
    firebase.database().ref('vote/vote/' + studentId + '/' + item).on('value', (snap) => {
      state.setState({ vote: { ...state.state.vote, [item]: snap.val() } })
    })
  })
}

const currentVoteType = (studentId, onVote) => {
  firebase.database().ref('vote/vote/' + studentId).on('value', (snap) => {
    if(snap.val()) {
      const voted = Object.values(snap.val())
      onVote(voted);
    }
  })
}

const vote = async (studentId, type, team) => {
  type = type.toLowerCase()

  // not working
  // // this could cause bug if 2 person call at the same time!!!
  // await firebase.database().ref('vote/vote/' + studentId + '/' + type).once('value').then( async (oldteam) => {
  //   if(oldteam.val()!=null) {
  //     const oldValue = firebase.database().ref('vote/count/' + type + '/' + oldteam.val())
  //     await oldValue.once('value').then( (snap) => {
  //       oldValue.set(snap.val() - 1)
  //     })
  //   }
  //   const newValue = firebase.database().ref('vote/count/' + type + '/' + team)
  //   await newValue.once('value').then( (snap) => {
  //     if(snap.val()) {
  //       newValue.set(snap.val() + 1)
  //     } else {
  //       newValue.set(1)
  //     }
  //   })
  // })

  firebase.database().ref('vote/vote/' + studentId + '/' + type).set(team)
}

export {
  currentVote,
  currentVoteType,
  vote
}
