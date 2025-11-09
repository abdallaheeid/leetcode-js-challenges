/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filtered = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (fn(element, index)) {
      filtered.push(element);
    }
  }
  return filtered;
};

function greaterThan10(n) {
  return n > 10;
}

function firstIndex(n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}

console.log(filter([0, 10, 20, 30], greaterThan10));
console.log(filter([1, 2, 3], firstIndex));
console.log(filter([-2, -1, 0, 1, 2], plusOne));
