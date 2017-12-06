// array exercises

function my_uniq(array) {
  let mySet = new Set();
  array.forEach(function(item){
    mySet.add(item);
  })
  return Array.from(mySet);
  delete mySet;
}

function my_twoSum(array) {
  let stack = [];
  for (let i=0; i<array.length; i++){
     let int = array[i];
     array.forEach(function(item){
      if(int + item === 0){
        let pair = [];
        pair.push(i);
        pair.push(array.indexOf(item));
        if(pair[0] != pair[1] && pair[0] < pair[1]){
        stack.push(pair);
        }
      }
     })
  }
  return stack;
}

function my_transpose(array) {
  let transpose = [];
  for(let i=0; i<array.length; i++){
    let column=[];
    array.forEach(function(row){
      column.push(row[i]);
    })
    transpose.push(column);
  }
  return transpose
}

// enumerable exercises
function myEach(enums, callback){
  let max = enums.length;
  for (i=0; i<max; i++){
    callback(enums[i]);
  }
}

var puts = function(statement){
  console.log(statement);
}

phrases = ['hi', 'ho', 'lets go!'];

function myMap(enums, callback, myEach){
  myEach(enums, callback)
}

// iteration exercises
function bubbleSort(array){
  array.forEach(function(item){
    for(let i=0; i<array.length; i++){
      if(array[i]>array[i+1]){
        let less = array[i+1];
        let more = array[i];
        array[i] = less;
        array[i+1] = more;
      }
    }
  })
  return array
}

function substrings(string){
  let collection = [];
  for(let i=0; i<string.length; i++){
    for(let x=i+1; x<string.length+1; x++){
      let tempSub = string.substring(i, x);
      if (collection.indexOf(tempSub)  === -1 ){
        collection.push(tempSub);
      }
    }
  }
  return collection;
}

