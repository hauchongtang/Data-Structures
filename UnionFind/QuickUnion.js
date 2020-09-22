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
    var i = this.id[p];
    var j = this.id[q];
    this.id[i] = j;
  }
}