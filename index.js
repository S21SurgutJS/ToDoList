'use-strict';

const taskList = [
  {
    text: 'Some todo text',
    isDone: true,
  }
]

const controlButton = document.querySelector('.controls__btn');
const controlInput = document.querySelector('.controls__input');
const todoList = document.querySelector('.todo-list');

function render(itemCount = 0) {
  todoList.innerHTML = '';
  taskList.forEach(elem => {
    createItem(elem, itemCount);
    itemCount++;
  })
}

function createItem({ text, isDone }, itemCount) {
  const item = document.createElement('li');
  item.className = 'todo-list__item';

  const todoLabel = document.createElement('label');
  todoLabel.className = 'todo-list__label';
  // todoLabel.setAttribute.name = 'todo-done';

  const todoInput = document.createElement('input');
  todoInput.className = 'todo-list__checkbox';
  todoInput.type = 'checkbox';
  todoInput.checked = isDone;
  todoInput.setAttribute('data-number', itemCount);
  todoLabel.appendChild(todoInput);

  const todoText = document.createElement('p');
  todoText.className = 'todo-list__text';
  todoText.innerHTML = text;
  todoLabel.appendChild(todoText);

  item.appendChild(todoLabel);

  const todoListButton = document.createElement('button');
  todoListButton.className = 'todo-list__btn';
  todoListButton.innerHTML = `<span class = "visually-hidden">Удалить запись</span>`;
  todoListButton.setAttribute('data-number', itemCount);

  const todoImg = document.createElement('img');
  todoImg.className = 'todo-list__img';
  todoImg.src = 'img/bascket.svg';
  todoImg.alt = 'Удалить todo';
  todoListButton.appendChild(todoImg);

  item.appendChild(todoListButton);
  todoList.appendChild(item);

  /*Считываем значение из input и записываем в массив
  после чего обновляем элементы*/
  controlButton.addEventListener('click', (e) => {
    e.preventDefault();
    const todoText = controlInput.value;
    if (todoText.trim().length) {
      createItem(controlInput.value);
      taskList.push({ text: todoText, isDone: false });
      render();
      controlInput.value = '';
    }
  });

  /*Считываем значение номера пункта записи и удаляем элемент из массива
  после чего обновляем элементы*/
  todoListButton.addEventListener(('click'), () => {
    taskList.splice(todoListButton.dataset.number, 1);
    render();
  });

  /*Отслеживанием изменение checkbox и изменяем свойство isDone в соответствующем элементе массива*/
  todoInput.addEventListener(('change'), () => {
    taskList[todoInput.dataset.number].isDone = todoInput.checked;
    // render();
  });
}

render();
