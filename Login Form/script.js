let labels = document.querySelectorAll(".form-action label");

labels.forEach((item)=>{
    item.innerHTML = item.innerText.split("").map((letter,index) =>{
        return `<span style="transition-delay:${index*20}ms">${letter}</span>`
    }).join("");
})