const taskList = [];
let count = 0;

export const appInit = () => {
	if (localStorage.getItem('taskList')) {
		taskList.push(...JSON.parse(localStorage.getItem('taskList')))
		count = taskList.map(el => el.id).sort((a, b)=> b-a)[0] + 1;
	}
}

export const settingTaskList = (text) => {
	taskList.push({
		id: count++,
		text: text,
		isDone: false
	})
	localStorage.setItem('taskList', JSON.stringify(taskList))
}

export const getTaskList = () => {
  return taskList;
}

export const deleteTask = (id) => {
	const index = taskList.findIndex(el => el.id === id);
    taskList.splice(index, 1);
	localStorage.setItem('taskList', JSON.stringify(taskList));
}

