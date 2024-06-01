// const heading = document.querySelector("h2");
// heading.innerText += "from apna collage students"

// heading.style.color = "pink"
// heading.style.fontSize = "2rem"

// const div = document.querySelector("div")
// console.log(div.getAttribute("id"));
// console.log(div.getAttribute("class"));

// let button = document.createElement("button")
// button.innerText = "click me!"
// button.style.backgroundColor = "red"
// button.style.color = "white"

// document.querySelector("body").append(button)

// let para = document.querySelector("p");
// para.setAttribute("class","newClass")

// console.log(para.getAttribute("class"))

let button = document.querySelector("button")
let body = document.querySelector("body")
let flag = false
button.addEventListener("click",() =>{
    if(flag){
        body.style.backgroundColor = "white"
        flag = false
    }
    else{
        body.style.backgroundColor = "black"
        flag = true
    }
})