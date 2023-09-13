const inputEl = document.getElementById('input')
const btnEl = document.getElementById('btn')

const taskList = [
  {
    text: 'Some TODO',
    isDone: false
  },
  {
    text: 'Купить хлеб',
    isDone: true
  },
  {
    text: 'Купить молоко',
    isDone: false
  },
]

function addToDoItem(text) {
  const item = {
    text: text,
    isDone: false
  }
  taskList.push(item)
}

function generateTaskTemplate(obj) {
  const element = document.createElement('div')
  element.classList.add('todo-field__item')
  if (obj.isDone) {
    element.classList.add('todo-field__item_done')
  }
}

btnEl.addEventListener('click', () => {
  if (inputEl.value) {
    addToDoItem(inputEl.value)
    inputEl.value = ''
  }
})

// btnEl.addEventListener('click', () => {
//   console.log(inputEl.value);
// })