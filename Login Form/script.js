let labels = document.querySelectorAll(".form-action label");
let button = document.getElementById("btn");
let userName = document.getElementById("Username");
let password = document.getElementById("Password");

labels.forEach((item)=>{
    item.innerHTML = item.innerText.split("").map((letter,index) =>{
        return `<span style="transition-delay:${index*20}ms">${letter}</span>`
    }).join("");
})


button.addEventListener("click",(e)=>{
    let user = userName.value;
    let pass = password.value;
    localStorage.setItem("username",user);
    localStorage.setItem("password",pass);
})