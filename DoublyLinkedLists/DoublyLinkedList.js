class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.next = next;
    this.previous = previous;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    return this;
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  delete(value) {
    // If there is nothing in the Linked List return null
    if (!this.head) {
      return null;
    }
    // Set deletedNode and currentNode placeholders
    let deletedNode = null;
    let currentNode = this.head;
    // Start iteration
    while (currentNode) {
      if (currentNode.value === value) {
        // Node value matches target value, store in deletedNode
        deletedNode = currentNode;
        if (deletedNode === this.head) {
          // Set new head as next node of deletedNode
          this.head = deletedNode.next;
          if (this.head) {
            // Before a head is null -> set new head to null
            this.head.previous = null;
          }
        }
        // Check if all nodes have same value as to be deleted
        if (deletedNode === this.tail) {
          this.tail = null;
        } else if (deletedNode === this.tail) {
          // If tail going to be deleted
          // Set tail to second last node, which will become new tail
          this.tail = deletedNode.previous
          this.tail.next = null;
        } else {
          // If middle node is going to be deleted
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;
          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      // Continue iteration to next bound
      currentNode = currentNode.next;
    }
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
  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
  }
}

// Simple Test
const doublyList = new DoublyLinkedList();
doublyList.fromArray([1, 2, 3, 4, 5, 6])
console.log(doublyList.toArray());
doublyList.prepend(0);
console.log(doublyList.toArray());
doublyList.append(7);
console.log(doublyList.toArray());
doublyList.delete(4);
console.log(doublyList.toArray());
