// gets task from input
function getTodos() {
    // creates array of tasks inputed
    var todos = new Array;
    // pulls task that was saved into web browser memory
    var todos_str = localStorage.getItem('todo');
    // if input is not null then json.parse communicates to web browser to make task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//adds inputed task to getTodos function array
function add() {
    // takse inputed taks and makes variable of it
    var task = document.getElementById('task').value;

    var todos = getTodos();
    // adds new task @ end of array
    todos.push(task);
    // converts the taks input into JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// keeps tasks permanently displayed on screen
function show() {
    // sets tasks that was retrieved as variable
    var todos = getTodos();

    // sets up each task as unordered list
    var html = '<ul>';
    // displays a task to the list in the oder that its inputed
    for (var i = 0; i < todos.length; i++) {
        // also displays task as a list and creates the button with the "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    // displays task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for ( var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

//displays inputed task when 'Add Item' is clicked
document.getElementById('add').addEventListener('click', add);
// keep inputs displayed permanently on screen
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // looks in show() how to display removed item
    show();

    return false;
}

