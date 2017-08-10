//Scope
//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

//all global variables belong to the window object
var carName = 'Volvo'

window.carName;

//Events
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function highlight(){
    document.getElementById('time4').style.background = "blue";
}

function unHighlight(){
    document.getElementById('time4').style.background = "white";
}

//Random
console.log(Math.floor(Math.random()*10));

var arr = [3, 4, 29, 23, 44, 1];

console.log(arr.sort()); //didnt work

var points = new Array(); // Bad
var points = []; // Good 
console.log(Array.isArray(points)); //to tell difference between object

//sort array numerically
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break; 
    case 0:
        text = "Today is Sunday";
        break; 
    default: 
        text = "Looking forward to the Weekend";
}

console.log(text)