// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('ok')
//   }, 1000)
// }) // 会不会报错 【如果你认为这个地方不报错，好好听】

const p1 = new Promise((resolve, reject) => {
  // console.log(a)

  resolve('ok')
  reject('no')
}) // 会不会报错 【如果你认为这个地方不报错，好好听】

console.log(p1)
p1.then((ret) => {
  console.log('成功了:', ret)
}, (reason) => {
  console.log('失败了', reason)
})
