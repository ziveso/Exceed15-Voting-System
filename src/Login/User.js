import studentIds from '../User/studentId'

export function Login (studentId) {
  var currentStudent = null
  for (var i = 0; i < studentIds.length; i++) {
    if (studentId === studentIds[i]) {
      currentStudent = studentIds[i]
      break
    }
  }

  if (currentStudent == null) {
    return -1
  }

  window.localStorage.studentId = studentId
  return currentStudent
}

export function Logout () {
  window.localStorage.studentId = null
}

export function isLogin () {
  if (window.localStorage.studentId && window.localStorage.studentId.length === 10) {
    return window.localStorage.studentId
  }
  return null
}
