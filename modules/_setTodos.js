import { todoKey } from './constants'

function setTodos(taskList) {
  localStorage.setItem(todoKey, JSON.stringify(taskList));
}

export { setTodos };