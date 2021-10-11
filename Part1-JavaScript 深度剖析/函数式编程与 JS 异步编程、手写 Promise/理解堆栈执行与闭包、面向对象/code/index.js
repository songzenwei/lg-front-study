var zce = 100
function fn() {
  var zce = 200
  return function (a) {
    console.log(a + zce++)
  }
}

var foo = fn()
foo(10)
foo(20)