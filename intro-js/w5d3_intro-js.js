function my_uniq(array) {
  let mySet = new Set();
  array.forEach(function(item){
    if (!mySet.has(item)){
      mySet.add(item);
    }
  })
  return mySet;
}

function my_twoSum() {

}

function my_transpose() {

}