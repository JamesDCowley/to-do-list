function addTask(){
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    console.log(taskInput.value);
    
    const task = document.createElement('div');
    task.className = 'task text-center';
    task.innerHTML = `
        <p>${taskInput.value}</p>
    `;
    taskList.appendChild(task);
}