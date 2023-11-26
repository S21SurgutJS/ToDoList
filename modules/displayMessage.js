
export function displayMessage(taskList){
    taskList.forEach((element, i)=>{
        const addTask = document.querySelector('.list');
        
        const item = document.createElement('li');
        item.className = 'list__item';
        item.id = i;
        addTask.appendChild(item);

        const label = document.createElement('label');
        item.appendChild(label);

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = element.isDone;
        // input.id = i;
        input.className = 'list__item__checkbox';
        label.appendChild(input);
        input.addEventListener('click', () => {
            taskList.forEach((element, index) => {
                if (item.id == index) {
                    element.isDone = !element.isDone;
                    localStorage.setItem('todo', JSON.stringify(taskList));
                }
            })
        })

        const text = document.createElement('p');
        text.innerHTML = element.taskText;
        text.className = 'list__item__text'; // add
        label.appendChild(text);

        const img = document.createElement('img');
        img.src = './img/Vector.svg';
        img.alt = 'trash';
        item.appendChild(img);
        img.addEventListener('click', () => {
            taskList.splice(+item.id, 1);
            localStorage.setItem('todo', JSON.stringify(taskList));
            addTask.innerHTML = '';
            displayMessage(taskList);
        })
    })
}