const LinkedList = require('../LinkedLists/LinkedList');

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() { // If no head, return true
    return !this.linkedList.head;
  }

  peek() {
    if (!this.isEmpty()) return null;
    return this.linkedList.head.value;
  }

  push(value) {
    const newNode = this.linkedList.prepend(value);
    return newNode;
  }

  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toArray() {
    return this.linkedList.toArray().map(node => node.value);
  }
}
