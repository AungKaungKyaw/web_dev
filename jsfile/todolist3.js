const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value;
    if (todoText === '') {
        alert('Please enter a task');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `${todoText} <button class="delete-btn">Delete</button>`;
    todoList.appendChild(li);
    todoInput.value = '';
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteTodo);
}

function deleteTodo() {
    const li = this.parentNode;
    todoList.removeChild(li);
}

console.log("hello")