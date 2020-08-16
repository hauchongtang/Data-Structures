class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null || next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    if (value) {
      if (Array.isArray(value)) return this.fromArray(value);
      return new TypeError(value + " is not iterable");
    }
    return this;
  }

  prepend(value) {
    this.size += 1;
    const newNode = new Node(value);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    this.size += 1;
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  fromArray(arr) {
    arr.forEach(e => this.append(e));
    return this;
  }

  toArray(useNode = false) {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(useNode ? currentNode : currentNode.value)
      currentNode = currentNode.next;
    }
    return nodes;
  }

  delete(value, deleteOne = false) {
    if (!this.head) return false;
    let deletedNode = null;
    // If head needs to be deleted, 
    // make sure that the next head is not equal to value
    // make next head the new head
    while (this.head && this.head.value === value) {
      this.size -= 1;
      deletedNode = this.head;
      this.head = this.head.next;
      if (deleteOne) return true;
    }
    let currentNode = this.head;
    // IF neither head or tail needs to be deleted
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          this.size -= 1;
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
          if (deleteOne) return true;
        } else { // value not found, traverse to next node
          currentNode = currentNode.next;
        }
      }
    }
    // If tail needs to be deleted
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    if (deletedNode === null) {
      return false;
    } else return true;
  }

  deleteHead() {
    if (!this.head) return false;
    this.size -= 1;
    let deletedHead = null;
    deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return true;
  }

  deleteTail() {
    if (this.size === 0) return false;
    if (this.size === 1) {
      if (this.head === null) return false;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return true;
    }
    const deletedTail = this.tail;

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        this.size -= 1;
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }
}
// Simple test
const arr = [1, 2, 3, 4, 5, 6];
const list = new LinkedList(arr);
console.log("starting")
console.log(list.toArray());
console.log(list.toArray(true));
console.log(list.delete(6));
console.log(list.toArray());