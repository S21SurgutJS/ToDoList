
//Эта функция создает новый элемент задачи на основе 
//предоставленного объекта и добавляет его в контейнер списка в HTML

function addTaskFromStorage(task) {
  var li = document.createElement("li");
  li.className = "list__item"; 

  var label = document.createElement("label");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("list__checkbox");

  var text = document.createTextNode(task.text); // использование текста из объекта task

  label.appendChild(checkbox);
  label.appendChild(text);
  li.appendChild(label);

  var trash = document.createElement("img");
  trash.src = "/img/Vector.svg";
  trash.alt = "trash";
  trash.className = "img_trash";
  //обработка завершения и удаления задач
  trash.addEventListener("click", function() {
      li.remove();
      saveTasks(); 
  });

  li.appendChild(trash);
  document.getElementById("list-container").appendChild(li);

  //Если элемент помечен как завершенный, 
  //он визуально обновляет элемент задачи, чтобы отобразить его завершенный статус

  if (task.completed) {
      li.classList.add("active");
      text.parentElement.style.textDecoration = "line-through";
      checkbox.checked = true;
  }

  checkbox.addEventListener("click", function() {
      li.classList.toggle("active");
      if (checkbox.checked) {
          text.parentElement.style.textDecoration = "line-through";
          task.completed = true;
          saveTasks(); 
      } else {
          text.parentElement.style.textDecoration = "none";
          task.completed = false;
      }
  });
}

//Эта функция извлекает все элементы задачи из контейнера списка в HTML
// и сохраняет их в локальном хранилище в виде строки JSON

function saveTasks() {
  var tasks = [];
  var listItems = document.querySelectorAll(".list__item label");
  listItems.forEach(function(item) {
      var task = {
          text: item.childNodes[1].textContent,
          completed: item.parentElement.classList.contains("active")
      };
      tasks.push(task);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//  Эта функция извлекает сохраненные задачи из локального хранилища,
//  анализирует их обратно в массив объектов задач, 
//  а затем вызывает каждую задачу для отображения 
//  их в контейнере списка.addTaskFromStorage

function loadTasks() {
  var tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
      tasks.forEach(function(task) {
          addTaskFromStorage(task);
      });
  }
}

//обеспечивает загрузку и отображение сохраненных задач при обновлении страницы

window.addEventListener("load", function() {
  loadTasks();
});

//Эта функция вызывается, когда новая задача добавляется через поле ввода

function addTask() {
  var input = document.getElementById("input-box").value;
  if (input.trim() === "") {
      alert("Пустое поле");
      return;
  }
  var task = {
      text: input,
      completed: false
  };

  // Он создает новый объект задачи на основе входного значения, 
  // добавляет задачу в список с помощью , очищает поле ввода,
  //  а затем сохраняет обновленный список задач
  //   в локальном хранилище.addTaskFromStorage
  addTaskFromStorage(task);
  document.getElementById("input-box").value = "";
  saveTasks(); 
}

