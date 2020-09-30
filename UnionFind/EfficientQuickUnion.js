class EfficientQuickUnion {
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
      this.size[i] = 1;
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
    if (i === j) return;
    if (size[i] < size[j]) {
      this.id[i] = j;
      size[j] += size[i];
    } else {
      this.id[j] = i;
      size[i] += size[j];
    }
  }
}