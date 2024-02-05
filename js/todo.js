const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(event);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    li.id = newTodoObj.id;

    const button = document.createElement("button");
    button.classList.add("btn-close");
    button.addEventListener("click", deleteToDo);

    const buttonCopy = document.createElement("button");
    buttonCopy.classList.add("buttonCopy");
    buttonCopy.addEventListener("click", copyToClipboard);

    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(buttonCopy);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}

function copyToClipboard(val) {
    const copy = document.createElement("textarea");
    const copyId = document.getElementById(val.target.parentElement.id);
    const copyVal = copyId.firstChild.innerText;

    copy.value = copyVal;
    document.body.appendChild(copy);

    copy.select();
    document.execCommand("copy");
    document.body.removeChild(copy);
}
