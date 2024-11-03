let addTask = document.querySelector(".addvalue");
let maintTitle = document.querySelector(".title_box");
let firstTask = document.querySelector(".firstTask");
let cancel1 = document.querySelector(".cancel1");
let secondTask = document.querySelector(".secondTask");
let cancel2 = document.querySelector(".cancel2");
let thirdTask = document.querySelector(".thirdTask");
let cancel3 = document.querySelector(".cancel3");
let fourthTask = document.querySelector(".fourthTask");
let cancel4 = document.querySelector(".cancel4");
let fifthTask = document.querySelector(".fifthTask");
let cancel5 = document.querySelector(".cancel5");
let sidebar = document.querySelector(".sidebar");
let listOne = document.querySelector(".firstlist");
let options = document.querySelector("img");
let logoPic = document.querySelector(".pictureSelect");
let picture = document.querySelector(".pictureBox");
let options1 = document.querySelector(".instructionBox");
let Close = document.querySelector(".close");
let closeTwo = document.querySelector(".closeTwo")
let body = document.querySelector("body");
let red = document.querySelector("#firstBackground");
let blue = document.querySelector("#thirdBackground");
let green = document.querySelector("#secondBackground");

addTask.addEventListener("click",function(){
    firstTask.style.display = "inline";
})
firstTask.addEventListener("keydown",function(event){
    if (event.key === "Enter") {
        secondTask.style.display = "inline";
    }
})
secondTask.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        thirdTask.style.display = "inline";
    }
})
thirdTask.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        fourthTask.style.display = "inline";
    }
})
fourthTask.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        fifthTask.style.display = "inline";
    }
})
firstTask.addEventListener("keydown",function(event){
    if (event.key === "Delete") {
        firstTask.style.display = "none";
    }
})
secondTask.addEventListener("keydown",function(event){
    if (event.key === "Delete") {
        secondTask.style.display = "none";
    }
})
thirdTask.addEventListener("keydown",function(event){
    if (event.key === "Delete") {
        thirdTask.style.display = "none";
    }
})
fourthTask.addEventListener("keydown",function(event){
    if (event.key === "Delete") {
        fourthTask.style.display = "none";
    }
})
fifthTask.addEventListener("keydown",function(event){
    if (event.key === "Delete") {
        fifthTask.style.display = "none";
    }
})
options.addEventListener('click',function(){
    options1.style.display = "inline";
})
Close.addEventListener("click",function(){
    options1.style.display = "none";
})
logoPic.addEventListener("click",function(){
    picture.style.display = "block";
})
closeTwo.addEventListener("click",function(){
    picture.style.display = "none";
})
red.addEventListener("click",function(){
    body.style.backgroundImage = "url(Red.jpg)";
    addTask.style.background = "#9B111E";
    addTask.style.border = "none";
    maintTitle.style.backgroundImage = "linear-gradient(30deg,#D4145A , #FBB03B)";
    options1.style.backgroundImage = "linear-gradient(30deg,#D4145A , #FBB03B)";
    picture.style.backgroundImage = "linear-gradient(30deg,#D4145A , #FBB03B)"
    Close.style.color = "#9B111E";
    Close.style.border = "1px, solid, #9B111E";
    closeTwo.style.color = "#9B111E";
    closeTwo.style.border = "1px, solid, #9b111E";
})
green.addEventListener("click",function(){
    body.style.backgroundImage = "url(Green.jpg)"
    addTask.style.background = "#009245";
    addTask.style.border = "none";
    maintTitle.style.backgroundImage = "linear-gradient(30deg,#009245 , #FCEE21)";
    options1.style.backgroundImage = "linear-gradient(30deg,#009245 , #FCEE21)";
    picture.style.backgroundImage = "linear-gradient(30deg,#009245 , #FCEE21)";
    Close.style.color = "#009245";
    Close.style.border = "1px, solid, #009245";
    closeTwo.style.color = "#009245";
    closeTwo.style.border = "1px, solid, #009245";

})
blue.addEventListener("click",function(){
    body.style.backgroundImage = "url(Blue.jpg)"
    addTask.style.background = "#1babff94";
    addTask.style.border = "none";
    maintTitle.style.backgroundImage = "linear-gradient(30deg, #2E3192 , #1BFFFF)";
    options1.style.backgroundImage = "linear-gradient(30deg, #2E3192 , #1BFFFF)";
    picture.style.backgroundImage = "linear-gradient(30deg, #2E3192 , #1BFFFF)";
    Close.style.color = "#1babff94";
    Close.style.border = "1px, solid, #1babff94";
    closeTwo.style.color = "#1babff94";
    closeTwo.style.border = "1px, solid, #1babff94";

})
