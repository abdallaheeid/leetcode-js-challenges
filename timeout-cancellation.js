/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timerId = setTimeout(() => {
    return fn(...args);
  }, t);

  const cancelFn = function () {
    clearTimeout(timerId);
  };

  return cancelFn;
};

const result = [];

const fn = (x) => x ** 2;
const args = [2],
  t = 100,
  cancelTimeMs = 50;

console.log(cancellable(fn, args, t));

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
