import { todoKey } from './constants.js'

function getTodos() {
  return JSON.parse(localStorage.getItem(todoKey))
}

export { getTodos };