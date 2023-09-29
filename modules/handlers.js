import { taskList, controlInput } from './constants.js';
import { setTodos } from './todoManager.js';

function checkboxHandler(event) {
  let index = event.currentTarget.dataset.number;
  taskList[index].isDone = event.currentTarget.checked;
  setTodos(taskList);
}

function addTodoHandler(event) {
  event.preventDefault();
  const text = controlInput.value;
  if (text.trim().length) {
    const item = { text: text, isDone: false };
    taskList.push(item);
    setTodos(taskList);
    render();
  }
  controlInput.value = '';
}

function deleteTodoHandler(event) {
  let index = event.currentTarget.dataset.number;
  taskList.splice(index, 1);
  setTodos(taskList);
  render();
}

export { checkboxHandler, addTodoHandler, deleteTodoHandler };