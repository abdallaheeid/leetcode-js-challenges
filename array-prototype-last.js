/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length > 0 ? this.at(this.length - 1) : -1;
};

const arr = [null];
console.log(arr.last()); // 3
