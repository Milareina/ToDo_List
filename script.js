
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function createTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskItem.addEventListener('click', toggleTaskCompletion);
  }
}

function toggleTaskCompletion(event) {
  const taskItem = event.currentTarget;
  taskItem.classList.toggle('completed');
}

addTaskBtn.addEventListener('click', createTask);