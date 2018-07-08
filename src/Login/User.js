import studentIds from '../User/studentId'

export function Login(studentId) {
    var currentStudent = null;
    for(var i = 0 ; i < studentIds.studentIds.length ; i++) {
        if(studentId===studentIds.studentIds[i]) {
            currentStudent = studentIds.studentIds[i]
            break;
        }
    }

    if(currentStudent==null){
        return -1
    }

    localStorage.studentId = studentId
    return currentStudent;
}

export function Logout() {
    localStorage.studentId = null
    return null;
}

export function isLogin() {
    if(localStorage.studentId) {
        return localStorage.studentId
    }
    return null;
}
