var a = 3,
  obj = { a: 5 }
obj.fn = (function () {
  this.a *= ++a
  return function (b) {
    this.a *= (++a) + b
    console.log(a)
  }
})();
var fn = obj.fn
obj.fn(6)
fn(4)
console.log(obj.a, a)
