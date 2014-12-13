var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    if(list.head === null){
      list.tail =  new Node(value);
      list.head = list.tail;
    } else {
      list.head.previous = new Node(value);
      list.head.previous.next = list.head;
      list.head = list.head.previous;
    }
  };

  list.addToTail = function(value){
    if(list.head === null){
      list.tail =  new Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = new Node(value);
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    if(list.head === null){
      return;
    } else {
      var result = list.head;
      if(list.head.next === null){
        list.head = null;
        list.tail = null;
      }else{
        list.head = list.head.next;
        list.head.previous = null;
      }
      return result.value;
    }
  };

list.removeTail = function(){
    if(list.tail === null){
      return;
    } else {
      var result = list.tail;
      if(list.tail.previous === null){
        list.tail = null;
        list.head = null;
      }else{
        list.tail = list.tail.previous;
        list.tail.next = null;
      }
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addToTail - O(1)
// removeHead - O(1)
// contains - O(n)
// node - O(1)
