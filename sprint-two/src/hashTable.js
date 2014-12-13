var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrievedObj = this._storage.get(i);
  var objectStore = [];
  var bucket = [];
  objectStore.push(k);
  objectStore.push(v);
  if(Array.isArray(retrievedObj)){
    retrievedObj.push(objectStore);
    bucket=retrievedObj;
  } else {
    bucket.push(objectStore);
  }
  this._storage.set(i, bucket);
  this._counter++;
  if((this._counter/this._limit)*100>=75){
    this.rehash(2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrievedObj = this._storage.get(i);
  if(Array.isArray(retrievedObj)){
    for(var j = 0; j < retrievedObj.length; j++){
      if(retrievedObj[j][0] === k){
        return retrievedObj[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrievedObj = this._storage.get(i);
  if(Array.isArray(retrievedObj)){
    var foundIndex = -1;
    for(var j = 0; j < retrievedObj.length; j++){
      if(retrievedObj[j][0] === k){
        foundIndex=j;
      }
    }
    if(foundIndex>=0){
      retrievedObj.splice(foundIndex, 1);
      this._storage.set(i,retrievedObj);
      this._counter--;
      if((this._counter/this._limit)*100<25){
        this.rehash(0.5);
      }
    }
  return null;
  }
};

HashTable.prototype.rehash = function(change){
  this._counter = 0;
  var oldLimit = this._limit;
  var oldStorage = this._storage;
  this._limit = this._limit * change;
  this._storage = LimitedArray(this._limit);
  for(var j = 0; j < oldLimit; j++){
    var retrievedObj = oldStorage.get(j);
    if(Array.isArray(retrievedObj)){
      for(var m = 0; m < retrievedObj.length; m++){
        this.insert(retrievedObj[m][0],retrievedObj[m][1]);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Insert - O(1)
// Retrieve - O(1)
// Remove - O(1)
// Rehash - O(n)
