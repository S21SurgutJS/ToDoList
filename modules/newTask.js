import { displayMessage } from "./displayMessage";

const addButton = document.querySelector('.toAdd__button');

let taskList = [];

addButton.addEventListener('click', () => {
    taskList = JSON.parse(localStorage.getItem('todo'));
    
    const addTask = document.querySelector('.list');
    const addMessage = document.querySelector('.toAdd__input');

    const text = addMessage.value;
    if (text.trim().length) {
        let newTask = {
            taskText: text,
            isDone: false
        }
        taskList.push(newTask);
        addMessage.value = '';
    } else {
        alert('Поле пустое!');
    }
    localStorage.setItem('todo', JSON.stringify(taskList));
    addTask.innerHTML = '';
    displayMessage(taskList);
})

export const getTaskList = () => {
    return taskList;
  }
  