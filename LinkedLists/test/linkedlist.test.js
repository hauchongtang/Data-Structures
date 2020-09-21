const LinkedList = require('../LinkedList');
const Node = require('../LinkedList');
describe('Node', () => {
  it('Node created is of correct value', () => {
    const linkedList = new Node(1);
    expect(linkedList.value).toBe(1);
    expect(linkedList.next).toBe(undefined);
  })
})

describe('LinkedList', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  it('Returns empty linked list', () => {
    const linkedList = new LinkedList(arr);
    const result = linkedList.toArray();
    expect(result).toBe(arr);
  })
})