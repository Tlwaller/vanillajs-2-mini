document.querySelector('form').addEventListener('submit', addTodo);

function addTodo(event) {
    event.preventDefault();
    const item = document.createElement('li');
    item.addEventListener('click', completeTodo);
    item.innerText = document.getElementById('item').value;

    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', removeTodo);
    item.append(button);

    const list = document.querySelector('ul');
    list.appendChild(item);
}

function removeTodo(event) {
    event.target.parentNode.remove();
}

function completeTodo(event) {
    let value = event.target.getAttribute('aria-checked');
    if(value != true) {
        event.target.setAttribute('aria-checked', 'true');
    } else {
        event.target.setAttribute('aria-checked', 'true');
    }
}