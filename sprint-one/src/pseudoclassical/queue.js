var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  this.storage = {};
  this.counter = 0;
  this.first = 0;

};


Queue.prototype.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function(){
  if(this.counter>this.first){
    var value = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
  }
  return value;
};

Queue.prototype.size = function(){
  return (this.counter-this.first);
};

var queue = new Queue();



