import React,{useState} from "react";

function ZHooks(props){
    const [count,setCount]=useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    )
}

export default ZHooks;


/*
    Hooks
    什么是Hooks：一套能够使函数组件更强大，更灵活的 钩子
    React的设计理念  UI=f(data)
有了hooks以后，为了兼容老版本，class组件并没有被移除，二者都可以使用
hooks为  函数组件 提供了状态。
hooks只能在函数组件中使用。
    Hooks解决了什么问题
1.组件的逻辑复用
2.class组件自身的问题  class厚重， this指向问题等
    Hooks优势总结
1.告别难以理解的class
2.解决业务逻辑难以拆分的问题
3.使状态逻辑复用变得简单可行。
4.函数组件在设计思想上，更加契合React的理念。


    useState    为函数组件提供状态
    步骤
1.导入  useState函数  在'react'包中
2.调用 useState函数，并传入状态的初始值
3.从useState函数的返回值中，拿到 状态 和 改变状态 的方法。
4.在JSX中展示状态
5.调用修改状态的方法更新状态

    状态的读取和修改
    const [state,setState]=useState(0)
1.useState传过来的参数 是 state的初始值。这里的写法是一个解构赋值，函数的返回值是一个数组
    解构赋值名字可以自定义，位置不行. 第一个返回值是数据状态，第二个返回值是 修改状态的方法
2.setState函数 作用用来修改count，依旧保持不能直接修改原值，而是生成一个新值替换原值。
    setState(基于计算得到的新值)

    组件的更新过程:当调用  setState的时候
    1.首次渲染
首次被渲染的时候，组件内部的代码会被执行一次，其中 useState也会跟着执行，
useState的参数(初始值)只在首次渲染时生效
    2.更新渲染
整个组件会再次渲染，useState会被再次执行
useState再次执行，得到新值而不是初始值，之后模板用新值渲染


    useState使用规则
1.useState函数可以执行多次，每次执行独立，每调用一次为函数组件提供一个状态。
    useState注意事项
1.只能出现在函数组件中
2.不能嵌套在if/for/其他函数中 (react按照hooks的调用顺序识别每一个hook)
*/