import React from "react";
//函数组件和类组件

/*
    函数组件
1.组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签。
2.函数必须有返回值，表示该组件的UI结构，如果不需要渲染任何内容，则返回null
3.组件就像HTML标签一样可以被渲染到页面中。组件表示的是一段结构内容，
    对于函数组件来说，渲染的内容是函数的返回值
4.使用函数名称作为组件标签名称，可以成对出现也可以自闭合。
*/

export function ZFunc(props){
    let hander=(e,msg)=>{
        //阻止默认行为  这里是只打印,阻止跳转
        e.preventDefault();
        alert(`function component 事件触发 ${msg}`);
    }
    return(
        <div>
            <a onClick={(e)=>hander(e,"this is msg")} href="https://www.bilibili.com/">billbill</a>
        </div>
    )
}

/*
    类组件
1.类名称也必须以大写字母开头
2.类组件应该继承React.Component父类，从而使用父类中提供的方法或属性。
3.类组件必须提供render方法，render方法必须有返回值，表示该组件的UI结构。
*/
class ZClass extends React.Component {
    //标准写法，这样写  回调函数中的this指向的是当前的组件实例对象
    ClickHander=(e)=>{
        alert("类组件中的事件绑定触发");
    }
    render(){
        return (
            <h2 onClick={this.ClickHander}>类组件</h2>
        )
    }
}


export default ZClass;