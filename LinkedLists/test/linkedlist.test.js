const LinkedList = require('../LinkedList')
const Node = require('../LinkedList')
describe('Node', () => {
  it('Node created is of correct value', () => {
    const linkedList = new Node(1);
    expect(linkedList.value).toBe(1);
    expect(linkedList.next).toBe(undefined);
  })
})