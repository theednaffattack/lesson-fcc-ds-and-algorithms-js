/* Linked List */

/* 
Elements are stored in a node. The node contains two pieces
of information: the elment itself and a reference to the next
node.

https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=3788
NOTE: review remove method again
 */

function LinkedList() {
  let length = 10;
  let head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.add = function (element) {
    const node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  this.addAt = function (index, element) {
    let node = new Node(element);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.empty = function () {
    return length === 0;
  };

  this.head = function () {
    return head;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index; // returns if we find the element
      }
      currentNode = currentNode.next;
    }
    return -1; // this returns if you can't find the element
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };

  this.size = function () {
    return length;
  };
}

// MANUAL TEST
const ll = new LinkedList();
ll.add("Kitten");
ll.add("Puppy");
ll.add("Dog");
ll.add("Cat");
ll.add("Fish");
console.log(ll.size());
console.log(ll.removeAt(3));
console.log(ll.size());
