import studentIds from '../User/studentId'

export const Login = studentId => {
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

export const Logout = () => {
  window.localStorage.studentId = null
}

export const isLogin = () => {
  return (window.localStorage.studentId && window.localStorage.studentId.length === 10) || false
}
