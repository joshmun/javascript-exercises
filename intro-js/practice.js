function madLib(string1, string2, string3){
  console.log("We shall " + string1.toUpperCase() + " the " + string2.toUpperCase() + " " + string3.toUpperCase() + ".")
}

function isSubstring(searchString, subString){
  var strings = searchString.split(" ");
  return (strings.indexOf(subString) > -1);
}

function fizzBuzz(array){
  var newArray = [];
  for (var i in array){
    if (i % 3 === 0 && i % 5 === 0){
      continue;
    }
    else if (i % 3 == 0 || i%5==0){
      newArray.push(i);
    }
  }
  return newArray;
}

// fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

function titlelize(array, callback){
  let titled = array.map(name => "Mx. " + name + " Jingleheimer Shmidt");
  callback(titled); 
}

function printCallback(array){
  array.forEach(function(name){
    console.log(name);
  })
}

titlelize(["Mary", "Brian", "Leo"], printCallback);

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.arrayOftricks = tricks;
}

Elephant.prototype.trumpet = function(){
  console.log(this.name + " the elephant goes 'phrRRRRRRRRRRR!!!!!!!'");
}

Elephant.prototype.grow = function(){
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick){
  this.arrayOftricks.push(trick);
}

Elephant.prototype.play = function(){
  let min = 0;
  let max = this.arrayOftricks.length;
  let choice = Math.floor(Math.random() * (max - min)) + min;
  let trick = this.arrayOftricks[choice];
  console.log(this.name + " is " + trick);
}

Elephant.prototype.paradeHelper = function(elephant){
  console.log(elephant.name + " is trotting by!");
}

