import LocalStorage from './localStorage'
import SessionStorage from './sessionStorage'
import Cookie from './cookie'

const cookie = new Cookie()
const localStorage = new LocalStorage()
const sessionStorage = new SessionStorage()

const store = {
  cookie,
  localStorage,
  sessionStorage
}

export default store