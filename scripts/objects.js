// OBJECT-------------------------------------------------------------------------------
var booksArray = ['book1', 'book2', 'book3'];
var myBox = { height: 6, width: 8, length: 10, volume: 720,
              material: 'cardboard',
              contents: booksArray
            };

myBox.contents.push('book4');

console.log('myBox: ' + myBox);
console.log('myBox.contents: ' +  (myBox.contents));

myBox.height = 5;

//OR
myBox['width'] = 9;
console.log(myBox.width);

myBox['new_key'] = 3;
console.log(myBox.new_key);

for(var i = 0; i < myBox['new_key']; i++){
  console.log(i);
}

//Delete property, delete returns T/F
delete myBox.contents;

console.log(myBox);

//functions in objects
var peeps = {
  foo: {nickName: 'fooey', height: 10, weight: 15},
  bar: {nickName: 'bary', height: 11, weight: 8},

  //method
  addPeep: function(name, nickName, height, weight){
    //instead of peeps[name] outside
    this[name] = {nickName: nickName, height: height, weight: weight};
  }
}

peeps.addPeep('jo', 'joey', 13, 20);

console.log(peeps);

//defining this outside
peeps.removePeep = function(name){
  this[name].name = name;
  var temp = this[name];
  delete this[name];
  return temp; //returning so we have reference for daisy chaining
}

var removedPeep = peeps.removePeep('foo');
console.log(peeps);

console.log(removedPeep);

//More on methods
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
}

};

lighthouseRock.addRanger('Jordan Wade', 'dual-wield hand crossbow', 4);
lighthouseRock.addRanger('Grant Gasser', 'nuke', 5);

console.log(lighthouseRock);