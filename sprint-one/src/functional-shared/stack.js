var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 0;
  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};

var stackMethods = {};


stackMethods.push = function(value){
  this.counter++;
  this.storage[this.counter] = value;
};

stackMethods.pop = function(){
  if(this.counter > 0){
    var value = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return value;
  }
};

stackMethods.size = function(){
  return this.counter;
};


