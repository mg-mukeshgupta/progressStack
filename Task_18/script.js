//for getting name And greeting :)
const nameBox= document.getElementById("nameBox")
const nameBtn=document.getElementById("nameBtn")
const username=document.getElementById("username")

nameBtn.addEventListener("click",() =>{
    const name=nameBox.value;
    username.innerText="Hello, "+ name;
});

// for coloring the boxes in click not toggle
const red=document.getElementById("red");
const blue=document.getElementById("blue");
const green=document.getElementById("green");
const yellow=document.getElementById("yellow");
// for red
red.addEventListener("click",()=>{
    red.classList.add("activeR");
})
//for blue
blue.addEventListener("click",()=>{
    blue.classList.add("activeB");
})
//for green
green.addEventListener("click",()=>{
    green.classList.add("activeG");
})
//for yellow
yellow.addEventListener("click",()=>{
    yellow.classList.add("activeY");
})