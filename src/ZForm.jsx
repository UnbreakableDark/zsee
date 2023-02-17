//受控组件与非受控组件
import React,{useState} from "react";

class ZForm extends React.Component{
    //1.在组件的state中,声明一个组件的状态数据
    state={
        message:"this is message",
    }
    change=(e)=>{
        //alert("change事件触发了");
        //4.在事件处理程序中,通过事件对象e获取当前文本框的值
        //调用setState方法,将文本的框的值作为state状态的最新值
        this.setState({
            message:e.target.value
        })
        //alert(this.state.message)
    }
    render(){
        //2.将状态数据设置为input标签元素的value属性的值
        //3.为input添加change事件
        return(
            <div>
                <input type="text" value={this.state.message} onChange={this.change}/>
                <Zform/>
            </div>
        )
    }
}

export default ZForm;


export function Zform(props){
    const [state,setState]=useState(0);
    return(
        <div>
            <p>
                <br/>受控组件就是可以被react的状态控制的组件。
                <br/>React组件的状态的地方是在state中,input表单元素也有自己的状态是在value中。
                <br/>React将state与表单元素的值(value) 绑定到一起,
                <br/>由State的值来控制表单元素的值,从而保证单一数据源特性
            </p>
            {state}{setState}
            <p>
                以获取文本框的值为例子，受控组件的步骤
                <ol>
                    <li>在组件的state中,声明一个组件的状态数据</li>
                    <li>将状态数据设置为input标签元素的value属性的值</li>
                    <li>为input添加change事件</li>
                    <li>在事件处理程序中,通过事件对象e获取当前文本框的值</li>
                    <li>调用setState方法,将文本的框的值作为state状态的最新值</li>
                </ol>
                <p>非受控组件</p>
                <ol>
                    <li>导入 createRef函数 (import from react)</li>
                    <li>调用createRef函数,创建一个ref对象,存储到实例中msgRef</li>
                    <li>为input添加 ref属性this.msgRef</li>
                    <li>
                        在按钮的事件处理程序中,通过msgRef即可拿到input对应的DOM元素,<br />
                        而,nsgRef.current.value拿到的就是文本框的值
                    </li>
                </ol>
            </p>
        </div>
    )
}