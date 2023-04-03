const loginForm = document.querySelector("#login-form");
const input = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";


const savedName = localStorage.getItem("Username");

if (savedName === null) {
    loginForm.classList.remove(HIDDEN);
} else {
    showName(savedName);
}

function showName(username){
    greeting.classList.remove(HIDDEN);
    greeting.innerHTML = "Hello, " + username;
    loginForm.classList.add(HIDDEN);
}

function loginHandler(event) {
    event.preventDefault();
    const username = input.value;
    localStorage.setItem("UserName", username); // 로컬스토리지에 저장
    showName(username);
}


loginForm.addEventListener("submit", loginHandler)



