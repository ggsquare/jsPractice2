var cows = [
  {name: 'Jar', type: 'bull'},
  {name: 'Bay', type: 'cow'},
  {name: 'Po', type: 'calf'},
  {name: 'Lat', type: 'cow'},
  {name: 'Bar', type: 'calf'},
  {name: 'Foo', type: 'bull'},
  {name: 'Kay', type: 'bull'},
]

Array.prototype.countTypes = function(kind) {
  var numKind = 0;

  for(var i in this){
    if(this[i].type == kind){
      numKind++;
    }
  }

  return numKind;
}

console.log('Amt cows: ' + cows.countTypes('bull'));

/////////////
/*

INHERITANCE AND CONSTRUCTORS

*/
/////////////


//create new Objects with our existing Objects as prototypes
var shoe = { size: 6, gender: "female", construction: "slipper"};

var magicShoe = Object.create(shoe); //so shoe is the prototype for magicShoe
//so basically magicShoe inherits properties from shoe
console.log('magicShoe: ' + magicShoe);

Object.prototype.isPrototypeOf(shoe); //-> true

shoe.isPrototypeOf(magicShoe); //-> true;

magicShoe.isPrototypeOf(shoe); //-> false, duh

Object.isPrototypeOf(magicShoe); //-> true

//Prototype Chain: Object -> shoe -> magicShoe

//why we would need a constructor, for ex
var slipper = { size: undefined, gender: undefined, construction: undefined};

var nikeSlipper = Object.create(slipper);

//don't want to repeat this for every slipper
nikeSlipper.size = 12;
nikeSlipper.color = "blue";
nikeSlipper.gender = "male";
nikeSlipper.construction = "slippy";

//Constructor solution:

function Slipper(slipSize, slipColor, slipGender, slipConstruction){
    this.size = slipSize;
    this.color = slipColor;
    this.gender = slipGender;
    this.construction = slipConstruction;

    //move these to prototype to be inherited
    //this.putOn = function(){ alert('Slipper on');};
    //this.takeOff = function(){ alert('smelly, take it off');};
}

//Now inheritance
Slipper.prototype = {
    putOn: function(){alert('Slipper ' + this.construction + ' is on');}, //prototypes can refer to their own instances
    takeOff: function(){alert('smelly, take it off');}
};

Slipper.prototype.clean = function() {
    alert('Cleaning slippers');
}

//new instantiates the class
var adidasSlipper = new Slipper(10, 'green', 'male', 'slippy');

console.log(adidasSlipper);
//adidasSlipper.takeOff();

adidasSlipper.putOn();
adidasSlipper.clean();


//OVERRIDE PROTOTYPAL METHODS
var x = 4;
var y = "4";

x.valueOf() //-> 4
y.valueOf() //-> "4"

console.log(x.valueOf() == y.valueOf()); //true, because '==' trys to help w/ type coercion

x.valueOf() === y.valueOf(); //false, safer to go with ===

//valueOf not very interesting on its own, gets interesting when redefine valueOf method for a class' prototype

//constructors can be function expressions too, not just declarations like above
var Tornado = function(category, affectedAreas, windGust){
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
};

var cities = [['Kansas City', 464310], ['Topeka', 127939], ['Lenexa', 49398]];
cities.push(['Scottsdale', 100000]);
var twister = new Tornado('F5', cities, 220);

//doesn't display enough info for twister variable, for ex says cities is Array(3)
console.log(twister.valueOf());

//override prototype's property, valueOf
//changing valueOf to be the sum of all people affected by this tornado
Tornado.prototype.valueOf = function(){
    var sum = 0;

    for(var i = 0; i < this.affectedAreas.length; i++){
        sum += this.affectedAreas[i][1];
    }
    return sum;
}

console.log(twister.valueOf());

//toString property
var x = 4;
x.toString(); //'4'

var a = [3, 'blind', 'mice'];
a.toString(); // '3,blind,mice'

var double = function(param){
    return param * 2;
}

double.toString(); //literally makes function definition into string, useful for concatenating function into formatted printout

Tornado.prototype.toString = function(){
    var list = '';

    list += ''; //the category, affected areas, etc.

}

console.log(twister.constructor); //returns the entire function
console.log(twister.constructor.prototype); //returns the object containing valueOf, toString, constructor

// hasOwnProperty method
//searching prototype chain for potential overridden properties

console.log(10 ** 2); //easy exponentiation