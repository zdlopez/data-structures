

var Graph = function(){
  this.graph = {};
  this.node;
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.graph[node] = [];
  this.node = node;
};

Graph.prototype.contains = function(node){
  if(this.graph[node]){
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
    //loop

    delete this.graph[node];
    delete this.node;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.graph[fromNode].indexOf(toNode)>=0){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)){
    this.graph[fromNode].push(toNode);
    this.graph[toNode].push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this.graph[fromNode].length; i++){
    if(this.graph[fromNode][i] === toNode){
      this.graph[fromNode].splice(i, 1);
    }
  }
  for(var i = 0; i < this.graph[toNode].length; i++){
    if(this.graph[toNode][i] === fromNode){
      this.graph[toNode].splice(i, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  //for(var key in this.graph){
  //  cb(key);
  //}
  _.each(this.graph, function(value, key){
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



