let username = document.getElementById("text");
let pass = document.getElementById("pass");

username.value = localStorage.getItem("username");
pass.value = localStorage.getItem("password");