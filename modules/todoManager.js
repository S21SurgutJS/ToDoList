import { todoKey } from './constants';

function setTodos(taskList) {
  localStorage.setItem(todoKey, JSON.stringify(taskList));
}


function getTodos(taskList) {
  if (localStorage.length) {
    taskList.length = 0;
    taskList.push(...JSON.parse(localStorage.getItem(todoKey)));
  }
}

export { setTodos, getTodos };