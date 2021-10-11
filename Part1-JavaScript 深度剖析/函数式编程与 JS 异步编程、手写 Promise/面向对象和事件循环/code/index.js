const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000)
})

const p2 = p1.then((result) => {
  console.log('成功了--->', result)
  return Promise.resolve('成功了')
})

// p2 的状态是什么？值是什么
// p2的状态取决于 p1 的执行
console.log(p2, 3333)

