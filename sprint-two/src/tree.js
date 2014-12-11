var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target){
  var flag = false;
  if(this.value === target){
    flag = true;
  }
  for(var i = 0; i < this.children.length; i++){
    flag = flag || this.children[i].contains(target);
  }
  return flag;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
