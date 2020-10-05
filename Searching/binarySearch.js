var sortedArr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
var sortedArr2 = [2, 3, 4, 6, 8, 19, 90, 1000];

const binarySearch = (target, arr) => {
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    var mid = start + (end - start) / 2;
    if (target < arr[Math.floor(mid)]) {
      end = Math.floor(mid) - 1;
    } else if (target > arr[Math.floor(mid)]) {
      start = Math.floor(mid) + 1;
    } else {
      return Math.floor(mid);
    }
  }
  return -1;
}

console.log(binarySearch(19, sortedArr1));
console.log(binarySearch(90, sortedArr2));