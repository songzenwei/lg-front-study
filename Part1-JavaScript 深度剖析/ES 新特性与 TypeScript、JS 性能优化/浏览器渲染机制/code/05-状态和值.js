const p1 = new Promise((resolve, reject) => {
  // resolve('ok')
  reject('no')
})

const p2 = p1.then((ret) => {
  console.log(1111)
  return 100
}, (a) => {
  return Promise.reject('手动返回一个失败的promise')
})

console.log(p2) // p2 也是一个promise  

