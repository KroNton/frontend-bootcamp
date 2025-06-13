// Array of objects to store tasks (Requirement 1)
let tasks = [];

// DOM elements
const taskList = document.getElementById('taskList');
const taskTitleInput = document.getElementById('taskTitle');
const taskDescInput = document.getElementById('taskDesc');

// Function to render tasks
function renderTasks(tasksToRender = tasks) {
    taskList.innerHTML = '';

    tasksToRender.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;

        taskItem.innerHTML = `
            <div class="task-info">
                <div class="task-title">${task.title}</div>
                ${task.description ? `<div class="task-desc">${task.description}</div>` : ''}
            </div>
            <div class="task-actions">
                <button class="complete-btn" onclick="toggleComplete(${index})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
    });
}

// Function to add a new task (Requirement 2 - push())
function addTask() {
    const title = taskTitleInput.value.trim();
    const description = taskDescInput.value.trim();

    if (!title) {
        alert('Task title is required!');
        return;
    }

    // Create task object (Requirement 3)
    const newTask = {
        title,
        description,
        completed: false,
        createdAt: new Date()
    };

    tasks.push(newTask);
    renderTasks();

    // Clear inputs
    taskTitleInput.value = '';
    taskDescInput.value = '';
    taskTitleInput.focus();
}

// Function to edit a task (Requirement 2 - map())
function editTask(index) {
    const task = tasks[index];
    const newTitle = prompt('Edit task title:', task.title);
    if (newTitle === null) return;

    const newDesc = prompt('Edit task description:', task.description);

    tasks = tasks.map((t, i) =>
        i === index
            ? { ...t, title: newTitle.trim(), description: newDesc ? newDesc.trim() : '' }
            : t
    );

    renderTasks();
}

// Function to delete a task (Requirement 2 - splice())
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Function to toggle task completion status
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to filter tasks
function filterTasks(filter) {
    let filteredTasks = [];

    switch (filter) {
        case 'active':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
        default:
            filteredTasks = tasks;
    }

    renderTasks(filteredTasks);
}

// Initialize the app
renderTasks();