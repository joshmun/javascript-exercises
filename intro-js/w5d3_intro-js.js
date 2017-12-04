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