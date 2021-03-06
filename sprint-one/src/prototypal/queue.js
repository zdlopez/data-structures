var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.first = 0;
  return someInstance;

};


var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function(){
  if(this.counter>this.first){
    var value = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
  }
  return value;
};

queueMethods.size = function(){
  return (this.counter-this.first);
};


var queue = new Queue();

