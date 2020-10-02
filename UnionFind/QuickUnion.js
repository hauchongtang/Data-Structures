class QuickUnion {
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }
  root(i) {
    while (i !== this.id[i]) {
      this.id[i] = i;
      return i;
    }
  }
  connected(p, q) {
    return this.id[p] === this.id[q];
  }
  union(p, q) {
    var i = root(p);
    var j = root(q);
    this.id[i] = j;
  }
}
const node = new QuickUnion(6);
node.union(1, 5);
const test = node.connected(1, 5);
console.log(test); // true