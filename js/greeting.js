const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    let greetingSpan;
    if (document.querySelector("#greeting span.waviy--blue")) {
        greetingSpan = document.querySelector("#greeting span.waviy--blue");
    } else {
        greetingSpan = document.createElement("span");
        greetingSpan.classList.add("waviy--blue");
    }
    greetingSpan.innerText = `${username}`;
    greeting.append(greetingSpan);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogout(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    loginInput.value = "";
    checkUsername();
}

logout.addEventListener("click", onLogout);

function checkUsername() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername === null) {
        greeting.classList.add(HIDDEN_CLASSNAME);
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreeting(savedUsername);
    }
}

checkUsername();
