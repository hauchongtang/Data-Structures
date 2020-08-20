const LinkedList = require('../LinkedLists/LinkedList')

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if (!this.isEmpty()) return null;
    return this.linkedList.head.value;
  }

  enqueue(value) {
    return this.linkedList.append(value);
  }

  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}