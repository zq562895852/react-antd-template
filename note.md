### createElement
  + 在react中会调用React.createElement把jsx编译成虚拟dom

  一 什么是jsx,jsx是什么
    + 是createElement语法糖， JSX是js的一种扩展语言
    + jsx其实也是一个对象，可以作为函数参数和函数返回值
    + JSX会被babel编译为：React.createElement()，React.createElement()将返回一个叫作“ReactElement”的JS对象
  二、React为什么要用JSX?
    + JSX语法糖允许前端开发者使用我们最熟悉的类HTML标签语法来创建虚拟DOM在降低学习成本的同时，也提升了研发效率与研发体验。
  三 如果循环不给key会有什么影响
     key一般是一个唯一的值，可以根据这个key找到哪个节点发生变化
