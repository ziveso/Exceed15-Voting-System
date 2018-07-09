import * as firebase from 'firebase'

export function createTeam (name) {
  firebase.database().ref('/team/' + name).set({ isCreated: true })
}

export async function getTeam (name) {
  var jsonObject
  await firebase.database().ref('/team/' + name).on('value', snap => {
    jsonObject = snap.val()
  })
  console.log(jsonObject)
  return jsonObject
}

export function deleteTeam (name) {
  firebase.database().ref('/team/' + name).remove()
}

export function getAllTeams () {
  let jsonObject
  firebase.database().ref('/team').on('value', snap => {
    jsonObject = snap.val()
  })
  return jsonObject
}

// update
export function setTeam (name, newname) {
  firebase.database().ref('/team').push(name)
}
