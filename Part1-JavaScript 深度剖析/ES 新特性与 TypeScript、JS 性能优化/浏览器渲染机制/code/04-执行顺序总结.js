let p1 = new Promise((resolve, reject) => {
  console.log(1)
  // resolve('ok') 
  // console.log('2')
  setTimeout(() => {
    resolve('ok')
    console.log('2')
  }, 1000)
})
p1.then((ret) => {
  console.log('success--->', ret)
}, (reason) => {
  console.log('failed--->', reason)
})
console.log(3)

/**
 * 01 executor 函数是立即执行的，所以  1 输出了
 * 02 在 executor 函数当中存在 setTimeout ，这时就会在事件列队中会加一个宏任务1，此任务在 1000ms 后执行
 * 03 p1.then 开始执行（注册了二个任务）
 *  此时p1的状态是不明确的，那么 then 后面的微任务还没有添加到的队列当中）
 *  如果你此处认为将微任务添加到队列当中了，那么请记着，这个微任务的执行时机一定是等到 p1 状态明确之后才会执行
 *  p1的状态明确就需要等到 setTimeout 执行完，请思考 setTimeout 是一个什么任务，then 又是一个什么任务
 *  所以我们发现不是说 所有的微任务都一定先于宏任务执行
 * 04 输入了 3 ，当这行代码执行完成之后，就相当于所有的同步代码执行完了
 * 05 找异步任务，首先换微任务， 没有的时候就找宏任务， 所以此时会调用 resolve('ok')
 * 06 当我们去调用 Ok 的时候就会明确 p1 的状态，那么就会将 then 的回调添加到微任务队列当中，但是 setTimeout 里的代码
 * 现在是在主线程当中运行着，因此 2 肯定先输出，当2 输出之后就意味着这次的同步执行完了，那么再继续去队列当中查找
 * 07 这次查找就看到了微任务，然后拉到主线程当中执行，输出了 success
 * 1 3 2 success
 *
 * 微任务先执行，然后再找宏任务（ 第一轮，第二轮.......在一次循环当中，微先于宏 ）
 *
 *
 */