function my_uniq(array) {
  let stack = [];
  array.forEach(function(item){
    if (stack.indexOf(item) === -1){
      stack.push(item);
    }
  })
  return stack;
}

function my_twoSum() {

}

function my_transpose() {

}