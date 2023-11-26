import { displayMessage } from "./displayMessage";
import { getTaskList } from "./newTask";

export function checkLocalStorage() {
    if (localStorage.getItem('todo')) {
        let taskList = getTaskList();
        taskList = JSON.parse(localStorage.getItem('todo'));
        displayMessage(taskList);
    }
}