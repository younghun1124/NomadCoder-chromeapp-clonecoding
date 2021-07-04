const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

greeting.innerText = `안녕하세요 ${savedUsername}님`;

if (savedUsername === null) {
  //show the form
  loginForm.addEventListener("submit", loginSubmit);
} else {
  formAndGreetingSwap();
  //show the greetings
}
function formAndGreetingSwap() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function loginSubmit(event) {
  event.preventDefault();

  localStorage.setItem(USERNAME_KEY, loginInput.value);
  greeting.innerText = `안녕하세요 ${loginInput.value}님`;
  formAndGreetingSwap();
}
