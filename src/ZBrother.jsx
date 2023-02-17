import React from "react";
//兄弟传值

class ZBrother extends React.Component{
    state={
        sendA:"",
    }
    getBMessage=(msg)=>{
        console.log(msg);
        this.setState({sendA:msg})
    }
    render(){
        return(
            <div>
                <p>兄弟传值</p>
                <ZsonA sendA={this.state.sendA}/>
                <ZsonB getBMessage={this.getBMessage}/>
            </div>
        )
    }
}

export default ZBrother;

function ZsonA(props){
    return(
        <>
        <div>函数子组件A,{props.sendA}</div>
        </>
    )
}

class ZsonB extends React.Component{
    bMsg="this is b message";
    getBMessage=this.props.getBMessage;
    render(){
        return(
            <div>
                <p>类子组件B</p>
                <button onClick={()=>this.getBMessage(this.bMsg)}>button</button>
            </div>
        )
    }
}



/*
    兄弟传值
1.先把B中的数据通过子传父 传递给父组件
2.再把父组件接收到的数据 通过父传子 传递给子组件A

*/