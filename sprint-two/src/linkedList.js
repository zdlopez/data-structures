var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null){
      list.tail =  new Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    if(list.head === null){
      return;
    } else {
      var result = list.head;
      list.head = list.head.next;
      return result.value;
    }
  };

  list.contains = function(target){
    var pointer = list.head;
    do{
      if(pointer.value === target){
        return true;
      }
      pointer = pointer.next;
    } while(pointer !== null);
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
