import * as firebase from 'firebase';

// Add member to team
export function addMember(team, name, imageUrl) {
    // could be array;
    firebase.ref('/team/'+team).set();
}

// Edit member to team
export function editMember(team, name, newname, imageUrl) {
    firebase.ref('/team/'+team).once('value').then((snapshot) => {
        const teamMember = snapshot.val();
        // find name
        // delete that key

    })
}

// get Team member
export function getMembers(team) {
    firebase.ref('/team/'+team).on('value', (snapshot) => {
        snapshot.val();
    })
}

// Delete Team member
export function deleteMember(team,name) {
    firebase.ref('/team/'+team+"/"+name).remove();
}

export function getAllMembers() {
    firebase.ref('/team').on('value', (snapshot) => {
        snapshot.val();
    })
}