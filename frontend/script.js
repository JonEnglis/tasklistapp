const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

// Add task to DOM
const addTaskToDOM = (task) => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
}

// Add new task
addTaskButton.addEventListener('click', () => {
    const task = taskInput.value;
    if (task) {
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);
        taskInput.value = '';
    }
});

// Save task to local storage
const saveTaskToLocalStorage = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initial load
loadTasks();