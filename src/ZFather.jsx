import React,{useState} from "react";
//组件通信


class ZFather extends React.Component{
    state={
        list:[1,2,3,4],
        user:{
            name:"gugu",
            age:32,
            sex:"boy"
        },
        getMessage(){
            return "message"
        }
    };
    getSonMsg=(msg)=>{
        console.log(msg)
    }
    render(){
        return(
            <div>
                <p>类父组件</p>
                <ZSon list={this.state.list} user={this.state.user} getMessage={this.state.getMessage}/>
                <Zson msg={this.state.user.name} getSonMsg={this.getSonMsg}/>
                <hr />
            </div>
        )
    }
}

class ZSon extends React.Component{
    msg=this.props.getMessage();
    render(){
        return(
            <div>
                <p>类子组件</p>
                <ul>
                    {this.props.list.map((item)=><li key={item}>{item}</li>)}
                </ul>
                <p>{this.props.user.name}</p>
                <p>{this.msg}</p>
            </div>
        )
    }
}

export default ZFather;


export function Zfather(props){
    let [state,setState]=useState({message:"function message"});
    return(
        <div>
            <p>函数父组件</p>
            <Zson msg={state.message}/>
            <hr />
        </div>
    )
}

function Zson(props){
    const {getSonMsg}=props;
    const str1="66"
    return(
        <div>
            <p>函数子组件,{props.msg}</p>
            <button onClick={()=>getSonMsg(str1)}>button</button>
        </div>
    )
}

/*
    一、父传子
1.父组件提供要传递的数据
2.给子组件标签添加属性，值为state中的数据。
3.子组件中通过props 接收父组件中传来的数据。
    类组件:this.props对象
    函数组件:直接通过参数获取 props对象

    props是只读对象，单向数据流
    props可以传递任何数据：数字，字符串，数组，对象，函数，JSX

    二、子传父
    子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可。
*/