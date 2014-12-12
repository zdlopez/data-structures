var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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
    }else{
      return null;
    }
  } else {
    return null;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
