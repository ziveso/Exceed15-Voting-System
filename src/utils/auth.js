import studentIds from '../config/studentId'

const login = studentId => {
  if (studentIds.includes(studentId)) {
    window.localStorage.studentId = studentId
    return true
  }
  return false
}

const logout = () => {
  window.localStorage.studentId = null
  window.location.replace(window.location.origin + '/login')
}

const isLoggedIn = () => {
  return (window.localStorage.studentId && studentIds.includes(window.localStorage.studentId)) || false
}

const redirectIfNotLoggedIn = () => {
  if (!isLoggedIn()) {
    window.location.replace(window.location.origin + '/login')
  }
}

export default {
  login,
  logout,
  isLoggedIn,
  redirectIfNotLoggedIn
}
