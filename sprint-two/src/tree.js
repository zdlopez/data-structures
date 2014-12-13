var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value));
  this.children[this.children.length-1].parent = this;
};

treeMethods.removeFromParent = function(target){
  if(this.value === target){
    var breakTree = this;
    var breakIndex = this.parent.children.indexOf(this);
    this.parent.children.splice(breakIndex, 1);
    this.parent = null;
  }else{
    for(var i = 0; i < this.children.length; i++){
      this.children[i].removeFromParent(target);
    }
  }
};

treeMethods.traverse = function(callback){
  callback(this.value);
  for(var i = 0; i < this.children.length; i++){
    var child = this.children[i];
    child.traverse(callback);
  }
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
// addChild - O(1)
// contains - O(n)
