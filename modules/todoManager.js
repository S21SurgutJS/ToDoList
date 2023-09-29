import { todoKey } from './constants';

function setTodos(taskList) {
  localStorage.setItem(todoKey, JSON.stringify(taskList));
}

function getTodos() {
  return JSON.parse(localStorage.getItem(todoKey))
}

export { setTodos, getTodos };