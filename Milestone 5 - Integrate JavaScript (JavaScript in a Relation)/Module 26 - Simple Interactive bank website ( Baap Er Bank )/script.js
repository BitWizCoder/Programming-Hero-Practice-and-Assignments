// Elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");

// Login page
button.addEventListener("click", () => {
  if (email.value == "test@mail.com" && password.value == "test") {
    window.location.href = "./dashboard.html";
  }
});
