setTimeout(() => {
  console.log('1')
}, 30)
console.log(2)
setTimeout(() => {
  console.log(3)
}, 20)
console.log(4)

// console.time('AA')
// 消耗95ms
for (let i = 0; i < 88888888; i++) { }
// console.timeEnd('AA')
console.log(5)
setTimeout(() => {
  console.log(6)
}, 18)
console.log(7)
setTimeout(() => {
  console.log(8)
}, 25)
console.log(9)