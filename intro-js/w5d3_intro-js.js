function my_uniq(array) {
  let mySet = new Set();
  let newArray = new Array();
  array.forEach(function(item){
    if (!mySet.has(item)){
      mySet.add(item);
      newArray.push(item);
    }
  })
  delete mySet;
  return newArray;
}

function my_twoSum() {

}

function my_transpose() {

}