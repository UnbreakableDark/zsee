import React,{ ReactFragment } from "react";
//组件状态  类组件

class ZState extends React.Component {
    //定义组件状态
    state={
        //在这里可以定义各种属性，全都是当前组件的状态
        name:'test state',
    };
    changeName=()=>{
        //注意：不可以直接做赋值修改，必须通过一个方法
        this.setState({name:"change state"});
    }
    render(){
        return(
            <div>
                <p>
                this is a class component,
                当前的name为:{this.state.name}
                <button onClick={()=>this.changeName()}>修改</button>
                </p>
            </div>
        )
    }
}

export default ZState;