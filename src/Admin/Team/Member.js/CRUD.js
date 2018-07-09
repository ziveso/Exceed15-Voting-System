import * as firebase from 'firebase';

// Add member to team
export function addMember(team, name, imageUrl) {
    firebase.ref('/team/'+team).set({ member1: name, photo: imageUrl})
}

// Edit member to team
export function editMember(team, name, newname, imageUrl) {

}

// get Team member
export function getMembers(team) {

}

// Delete Team member
export function deleteMember(team,name) {

}