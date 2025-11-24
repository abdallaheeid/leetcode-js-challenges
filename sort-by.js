/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
};

let arr = [5, 4, 1, 2, 3];
let fn = (x) => {
  return x;
};

console.log(sortBy(arr, fn));

arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
fn = (d) => d.x;
console.log(sortBy(arr, fn));
