//Functions

////////////////////////////////////////
//Function Declaration
function findVehicle(name, list){

}

//Function Expression
var findVehicl = function(name, list){}
////////////////////////////////////////

//stored in memory when program loads, 'function declaration'
function diffOfSquares(a,b){
    return a*a - b*b;
}

//OR, loads only when program reaches this line, need ; because assignment - I don't think you need semi-colon anymore
//Anonymous function, just stored in variable name
var diff = function (a,b){
    return a*a - b*b;
};

//comment change

console.log(diff(9, 5));

var arr = [1,2,3,4,5];

//Using map function, instead of iterating through
var results = arr.map(function (elem) {
    return elem * 2;
});

console.log('results: ', results);

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function(elem) {
  return elem[0] + ' ' + elem[1];
});

console.log('modifiedNames: ', modifiedNames);

var names = [ "Thomas Meeks",
              "Gregg Pollack",
              "Christine Wong",
              "Dan McGaw" ];

/*var foo = names.map(function(elem) {
  alert('Yo ' + elem + '!');
});*/

//Array of functions
var puzzlers = [
  function(input){
    return(3*input)-8;
  },
  function(input){
    return Math.pow((input + 2),3);
  },
  function(input){
    return Math.pow(input,2)-9;
  },
  function(input){
    return input % 4;
  }
 ];

 var func = puzzlers[0];

 console.log(func(5)); //-> 7

 //Returning functions from functions
//Queues, 'shift pops' first cell of array, push pushes elem to end, they both return the elem
function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  if(userChoice == 1){
    return function() {
      alert('You selected the Vines of Doom!');
    };
  } else if(userChoice == 2) {
    return function() {
      alert('Looks like you want the Lake of Despair!');
    };
  } else {
    return function() {
      alert('The Caves of Catastrophe!');
    };
  }
}

var returnedFunction = adventureSelector(3);
returnedFunction();


var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function(input, queue){
  var num;
  var length = queue.length;
  for(var i = 0; i < length; i++){
      var func = queue[0]; //instead of i, because shift later
      num = func(input);
      queue.shift();
  }
  return num;
};

alert(applyAndEmpty(start, puzzlers));


//CLOSURES
//functions local variables not available once function's scope is closed

function testClosure(){
  var x = 4;
  function closeX(){
    return x;
  }
  return closeX;
}

//so we can get access to 4, a local var in testClosure because it has been bound as a closure inside closeX
var checkLocalX = testClosure();
checkLocalX(); // -> 4

//ex
function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2); //-> 40

//ex
function mystery(input) {
  var secret = 4;
  input += 2; //5
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3); //hidden -> mystery2
var jumble = mystery3(hidden);
var result = jumble(2); //result -> 122

//NOTE: if iterating through array and want to return function, do it immediating when find value,
//not like
/*
for(...){
  if(....){
    func = function(){
      alert('ahoy' + i)
    };
  }
}
return func;

but like:

for(...){
  if(....){
    return function(){
      alert('ahoy' + i)
    };
  }
}

*/

//HOISTING
//program load order, declarations hoisted to top, executable code later

//ex.
function getNum(){
  function choose(){
    return 12;
  }

  return choose();

  //hoisted up
  function choose(){
    return 7;
  }
}

console.log(getNum()); //7

//To get 12, assing them as variables, it will stop at return statement line 207


//another ex
function thisIsWeird() {
  function secret() {
    var unused3;
  }
  var result;
  function secret() {
    var unused1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret;
  function secret() {
    var unused2;
  }
  return result;
}
//result is unused2, which just overwrites unused3 and unused1
