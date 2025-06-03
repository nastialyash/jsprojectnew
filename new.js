fetch('https://jsonplaceholder.typicode.com/users')
.then(users=>{
    const userList = 
    document.getElementById('userList');
    users.forEach(user=>{
        const li = document.createElement('li');
        li.textContent = user.name;
        li.addEventListener('click',()=>
        loadTodos(user.id));
        userList.appendChild(li);
    });
});
function loadTodos(userId){
    fetch('https://jsonplaceholder.typicode.com/todos?userId=${userId}')
    .then(response=>response.json())
    .then(todos=>{
        const todoList = document.getElementById('todoList');
        todoList.innerHTML ;
        todos.forEach(todo=>{
            const li = document.createElement('li');
            li.textContent = `${todo.title}${todo.completed}`;
            todoList.appendChild(li);
        })
    })

}
