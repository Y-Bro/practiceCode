let panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((item)=>{
    item.addEventListener("click",()=>{
        console.log("XD");
        removeClass();
        item.classList.add("active");
    })
})

function removeClass(){
    panels.forEach((item)=>{
        item.classList.remove("active");
    })
}