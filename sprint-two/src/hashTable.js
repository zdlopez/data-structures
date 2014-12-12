var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrievedObj = this._storage.get(i);
  var objectStore = {};
  objectStore[k] = v;
  if(retrievedObj !== undefined){
    _.extend(objectStore, retrievedObj);
  }
  this._storage.set(i, objectStore);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrievedObj = this._storage.get(i);
  if(retrievedObj !== null){
    return retrievedObj[k];
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
