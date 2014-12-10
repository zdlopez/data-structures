var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    if(counter>first){
      var value = storage[first];
      delete storage[first];
      first++;
    }
    return value;
  };

  someInstance.size = function(){
    return (counter-first);
  };

  return someInstance;
};

