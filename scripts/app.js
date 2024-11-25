//make box color
//type box number
//change color of typed box
//give Id to html (boxes, 2 buttons, 2 input fields)
// make array for colors
//box array
//hook button up to array

// Boxes
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");

// Buttons
let changeColorBtn = document.getElementById("changeColorBtn");
let resetColorBtn = document.getElementById("resetColorBtn");

// User Input
let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");

// Arrays
let colorArray = ["Red", "Blue", "Purple", "Brown", "Yellow"];
let boxArray = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"];

// User
let box = "";
let color = "";

// Functions
function inArray(value, array) 
{
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

changeColorBtn.addEventListener("click", function () 
{
    box = boxNumber.value; 
    color = changeColor.value; 

    console.log("Box:", box);
    console.log("Color:", color);

    if (!inArray(`box${box}`, boxArray)) {
        return;
    }

    if (!inArray(color, colorArray)) {    
        return;
    }

    let selectedBox = document.getElementById(`box${box}`);
    selectedBox.style.backgroundColor = color;
});

resetColorBtn.addEventListener("click", function () 
{
    for (let i = 0; i < boxArray.length; i++) {
        let boxElement = document.getElementById(boxArray[i]);
        if (boxElement) {
            boxElement.style.backgroundColor = ""; 
        }
    }
});
