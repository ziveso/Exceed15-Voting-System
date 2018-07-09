import studentIds from '../User/studentId'

export const login = studentId => {
  if (studentIds.includes(studentId)) {
    window.localStorage.studentId = studentId
    return true
  }
  return false
}

export const logout = () => {
  window.localStorage.studentId = null
}

export const isLoggedIn = () => {
  return (window.localStorage.studentId && window.localStorage.studentId.length === 10) || false
}

export const redirectIfNotLoggedIn = () => {
  if (!isLoggedIn()) {
    window.location.replace(window.location.origin + '/login')
  }
}
