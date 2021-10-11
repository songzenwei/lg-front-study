/**
 * prototype 属性
 * - 每一个函数(除箭头)数据类型，都自带一个 prototype 属性，指向原型对象（Function除外）
 * - 每个原型对象都自带一个 constructor 属性，指向当前构造函数本身 
 * - 函数类数据类型
 *  + 普通函数、箭头函数、生成器函数 
 *  + 构造函数（ 自定义类 ） 
 *  + 内置函数（内置构造函数）
 * 
 * __proto__属性
 * - 每个对象数据类型，都自带一个 __proto__ 属性（隐式原型）
 * - 该属性会指向当前实例所属类的原型对象（prototype）
 * - 对象数据类型 
 *  - 普通对象、数组对象、正则
 *  - prototype 原型对象
 *  - 实例对象 
 *  - 函数也是对象 
 * 
 * Object 类
 * - 所有对象如果不知道是 new 谁来的，那么它就是 Object 的一个实例  
 * - Object 本身也是一个函数，因此同样具有 prototype 属性，指向它自己的原型对象
 * - Object原型对象本身也是一个对象，所以它身上也具有一个 __proto__ 属性，内部设计它指向 Null
 *
 */

function Foo() {
  this.m = 10
  this.n = 24
  this.getM = function () {
    console.log(this.m)
  }
}
Foo.prototype.getM = function () {
  console.log(this.m)
}

Foo.prototype.getN = function () {
  console.log(this.n)
}

// 加小括号的执行优先级会低于不加小括号
let foo1 = new Foo
let foo2 = new Foo
console.log(foo1.getM === foo2.getM)
console.log(foo1.getN === foo2.getN)
console.log(foo1.__proto__.getN === Foo.prototype.getN)
console.log(foo1.__proto__.getM === foo2.getM)
console.log(foo1.getM === Foo.prototype.getM)
console.log(foo1.constructor)
console.log(Foo.prototype.__proto__.constructor)
foo1.getM()
foo1.__proto__.getM()
foo2.getN()
Foo.prototype.getN()