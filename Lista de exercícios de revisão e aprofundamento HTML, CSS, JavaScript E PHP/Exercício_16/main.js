//Cadmiel Torres de Lima

// Verifica se há tarefas salvas no Local Storage e as carrega
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText) {
    createTaskElement(taskText);
    saveTask(taskText);
    taskInput.value = '';
  }
}

function createTaskElement(text, completed = false) {
  const taskList = document.getElementById('taskList');
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  if (completed) {
    taskDiv.classList.add('completed');
  }
  taskDiv.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remover';
  removeBtn.onclick = function () {
    removeTask(text);
    taskDiv.remove();
  };

  taskDiv.appendChild(removeBtn);
  taskDiv.onclick = function (event) {
    event.stopPropagation(); // Impede que o clique no botão 'Remover' marque a tarefa como concluída
    this.classList.toggle('completed');
    updateTask(text, this.classList.contains('completed'));
  };
  taskList.appendChild(taskDiv);
}

function saveTask(text) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ text, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTask(text, completed) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskIndex = tasks.findIndex(task => task.text === text);
  tasks[taskIndex].completed = completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(text) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter(task => task.text !== text);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks(); // Atualiza a lista de tarefas na tela
}