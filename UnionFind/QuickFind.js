var items = [0, 1, 1, 8, 8, 0, 0, 1, 8, 8];
class QuickFind {
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }
  connected(p, q) {
    return this.id[p] === this.id[q];
  }
  union(p, q) {
    var pId = this.id[p];
    var qId = this.id[q];
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pId) {
        this.id[i] = qId;
      }
    }
  }
}
const test = new QuickFind(7)
test.union(0, 1);
test.union(0, 2);
console.log(test.connected(0, 1))
