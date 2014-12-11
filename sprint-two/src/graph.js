

var Graph = function(node){
  this.graph = {};
  this.node = node;
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.edges.push(new Graph(node));
};

Graph.prototype.contains = function(node){
  var flag = false;
  if(this.node === node){
    flag = true;
  }
  for(var i = 0; i < this.edges.length; i++){
    flag = flag || this.edges[i].contains(node);
  }
  return flag;
};

Graph.prototype.removeNode = function(node){
  //var flag = false;
  if(this.node === node){
    delete this.node;
  }
  for(var i = 0; i < this.edges.length; i++){
    this.edges[i].removeNode(node);
  }
  //return flag;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var flag = false;
  if(this.node === node){
    flag = true;
  }
  for(var i = 0; i < this.edges.length; i++){
    flag = flag || this.edges[i].contains(node);
  }
  return flag;
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



