## 执行堆栈
> 名词具象化（ ECG VO AO GO 执行上下文 执行环境栈...... ）
> this 闭包 原型及原型链 Function 与 Object 
### 1.1 名词
1. JS执行平台
   1. 哪些地方可以执行 JS 代码？
   2. nodejs 
   3. 浏览器
   4. 原生及非原生应用（webview)
   5. 不论我们的JS代码在哪执行，最终都需要提供一个环境
2. 执行环境（ 以浏览器平台为例 ）
   1. 编程语言开发的程序在运行的时候最终都会拿到内存当中完成执行
   2. 在 JS 当中，浏览器加载界面的时候就会主动的向计算机申请一片内存空间（ 执行环境栈 ）
   3. ESC(execution stack context)
3. 执行上下文（ 不需要对它进行具象 ）  
   1. 一个JS文件会包含多种代码（变量，函数，对象），将不同的代码组合在一起形成代码块
   2. 不同的代码块之间可能会现现相同的命名......,代码在执行的时候如何对它们进行区分？
   3. 将每段代码都放在自己的执行上下文当中
   4. 我们可以认为执行上下文就是一个“容器”，在它里面包含了当前代码块进栈执行时所需要使用到的一切  
   5. EC( execution context )
4. 进栈执行
   1. 执行环境栈（ 浏览器加载界面默认会创建，内存空间 ），先进后出  
   2. 代码执行（函数调用）会产生一个独立的执行上下文，它会进到环境栈当中，运行内部的代码
   3. 内部代码执行完成之后，考虑是否出栈
5. EC(G)
   1. 全局执行上下文，默认情况浏览会生成一个全局执行上下文用于...... 
   2. 默认情况下它自动的就会出现在栈（执行环境栈）底，什么时候这个上下文占据的内存空间会被释放（ 关闭当前网页 ）
6. VO(G)【variable object global】
   1. 全局变量对象，（它是一个对象，一定能存东西，存什么？），VO(G) 在全局执行上下文当中
7. GO
   1. global object， 全局对象，它和 VO并不是同一个东西。
   2. 浏览器在加载界面的时候默认会创建的一个空间，它里面存放了一些我们在 JS 当中可以直接访问的 API（setTimeout setInterval JSON.....）
   3. 为了JS方便的找到它们，在全局执行上下文当中的 VO当中定义了一个变量叫 window 
8. 声明: `var name; const age;` 
9. 定义: `name = '拉勾教育'`

### 1.2 基本值  
1. 基本数据类型值存在栈空间
2. 作用域链查找机制（ GO ）

### 1.3 引用类型
### 1.4 函数类型
### 1.5 闭包机制
> 闭包是一种机制，可以保护和保存数据，而代码只是语法体现（ 大函数嵌套小函数，然后再返回小函数 ）
> 词法作用域，可以让一个函数在xxx之外的地方去使用它里面的数据


> JS：基本 引用 函数
## 面向对象