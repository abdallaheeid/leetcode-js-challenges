/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let out = {};
  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);
    if (!(key in out)) {
      out[key] = [];
    }
    out[key].push(this[i]);
  }
  return out;
};

const fn = function (item) {
  return item.id;
};
console.log([{ id: '1' }, { id: '1' }, { id: '2' }].groupBy(fn));
