//opdracht 1
const clickButton = event => {
    alert("button clicked");
};

const button = document.getElementById("mybutton");

button.addEventListener("click", clickButton);

//Opdracht 2
/*const buttonNew = document.getElementById("newbutton");


const changeBackground = event => {
        buttonNew.classList.add("red-background");
};


buttonNew.addEventListener("click", changeBackground);
*/

//Opdracht 3
const buttonNew = document.getElementById("newbutton");


const toggleColor = event => {
        buttonNew.classList.toggle("red-background");
};


buttonNew.addEventListener("click", toggleColor);