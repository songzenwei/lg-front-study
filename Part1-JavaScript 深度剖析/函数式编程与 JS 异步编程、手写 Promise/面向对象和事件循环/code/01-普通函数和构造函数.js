function Foo(m, n) {
  let ret = m + n
  this.m = m
  this.n = n
  return { 'name': 'zce' }
}

// 01 普通函数调用
// let ret = Foo(10, 20)
// console.log(ret)

// new 操作到底做了什么？ 创建对象--关联this--返回对象

// 02 构造函数执行
let res = new Foo(20, 20)
console.log(res)