setTimeout(() => {
  console.log(1)
}, 0)

console.log(2)
// while (true) { }  // 这里有一个死循环，意味着主线程一直被占用（ JS单线程，分不出来身去做其它的事情了 ）
// throw new Error('手动抛出异常') // 代码执行时如果有异步，它不会影响异常出现之前所存放的异步操作，但是异常之后不能执行了
console.log(a)

console.log(3)

setTimeout(() => {
  console.log(4)
}, 10)

console.log(5)