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
points.sort(function(a, b){return a - b}); //works
console.log(points);

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

console.log(text);

/*
You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.

The break statement can also be used to jump out of a loop.  

The break statement breaks the loop and continues executing the code after the loop (if any):

see HTML
*/
console.log(
typeof "John",                 // Returns "string" 
typeof 3.14,                   // Returns "number"
typeof NaN,                    // Returns "number"
typeof false,                  // Returns "boolean"
typeof [1,2,3,4],              // Returns "object"
typeof {name:'John', age:34},  // Returns "object"
typeof new Date(),             // Returns "object"
typeof function () {},         // Returns "function"
typeof myCar,                  // Returns "undefined" *
typeof null); 

//declarations hoisted, initializations are not
var y = 7; //here, 'var y' is hoisted, but not '= 7'

//To avoid bugs, always declare all variables at the beginning of every scope.

//Faster loops
var i;
var l = arr.length;
for (i = 0; i < l; i++) {}

//Access to DOM is very slow, this reduces that - also try to keep DOM small
/*
var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";


JSON is lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. 
Code for reading and generating JSON data can be written in any programming language.
Requires double quotes
*/

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

console.log(myFather.age);
console.log(myFather.firstName);

var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array object
var x6 = /()/           // new regexp object
var x7 = function(){};  // new function object

var father = myFather;

//objects are mutable, father points to the reference, so this changes what myFather points to as well
father.age = 52;

console.log(father.age);
console.log(myFather.age);

//simple object with method
function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}