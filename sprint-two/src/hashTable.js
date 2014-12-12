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
  console.log(objectStore);
  bucket = objectStore;
  if(Array.isArray(retrievedObj)){
    if(Array.isArray(retrievedObj[0])){
      retrievedObj.push(objectStore);
      bucket = retrievedObj;
    }else{
      bucket = [];
      bucket.push(retrievedObj);
      bucket.push(objectStore);
    }
  }
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrievedObj = this._storage.get(i);
  console.log(k);
  console.log(retrievedObj);
  if(Array.isArray(retrievedObj)){
    if(Array.isArray(retrievedObj[0])){
      for(var i = 0; i < retrievedObj.length; i++){
        if(retrievedObj[i][0] === k){
          return retrievedObj[i][1];
        }
      }
    }else{
      return retrievedObj[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
