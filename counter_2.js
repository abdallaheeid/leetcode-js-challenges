/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const initVal = init;
  return {
    increment: function () {
      return ++init;
    },
    decrement: function () {
      return --init;
    },
    reset: function () {
      init = initVal;
      return init;
    },
  };
};

const counter = createCounter(0);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 4
console.log(counter.reset()); // 5
console.log(counter.reset()); // 5
