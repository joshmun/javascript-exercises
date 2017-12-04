function my_uniq(array) {
  let mySet = new Set();
  array.forEach(function(item){
    mySet.add(item);
  })
  return Array.from(mySet);
  delete mySet;
}

function my_twoSum(array) {

}

function my_transpose(array) {

}