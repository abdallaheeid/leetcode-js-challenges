/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (valBe) {
      if (val === valBe) {
        return true;
      }
      throw Error('Not Equal');
    },
    notToBe: function (valNot) {
      if (val !== valNot) {
        return true;
      }
      throw Error('Equal');
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
