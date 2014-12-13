var BinarySearchTree = function(value){

  var someInstance = Object.create(binaryMethods);

  someInstance.left = null;
  someInstance.right = null;
  someInstance.value = value;
  return someInstance;
};

var binaryMethods = {};

binaryMethods.insert = function(value){
  //check if the value against this.value to determine left or right
  //value is lower then we look to the left
  //if left is null, we set left to new tree value
  //if left is not null we call .insert with .left (recursion)
  //repeat same code for right side if value > this.value
  // if value and this.value =, then go left
  if(value <= this.value){
    if(this.left !== null){
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if(this.right !== null){
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

binaryMethods.contains = function(value){
  var flag = false;
  if(value === this.value){
    flag = true;
  }else{
    if(value <= this.value && this.left){
      flag = flag || this.left.contains(value);
    }else{
      if(this.right){
        flag = flag || this.right.contains(value);
      }
    }
  }
  return flag;
};

binaryMethods.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }
  if(this.right !== null){
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// Insert = O(log n)
// Contains = O(log n)
// DepthFirst = O(n)
