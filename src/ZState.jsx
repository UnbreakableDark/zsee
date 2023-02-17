import React,{useState} from "react";
//组件状态  类组件

class ZState extends React.Component {
    //定义组件状态
    state={
        //在这里可以定义各种属性，全都是当前组件的状态
        name:'test state',
        list:[1,2,3],
        person:{
            name:"hack",
            age:45,
            sex:"boy"
        }
    };
    changeName=()=>{
        //注意：不可以直接做赋值修改，必须通过一个方法
        this.setState({name:"change state"});
    }
    changeArray=()=>{
        this.setState({
            list:[...this.state.list,4,5],
            person:{...this.state.person,name:"rose"}
        })
    }
    deleteArray=()=>{
        //setState删除数组，不能对数组进行直接修改
        this.setState({
            list:this.state.list.filter((item)=>item!==2)
        })
    }
    //不要直接修改状态的值，而是基于当前状态创建新的状态值再赋值回去
    render(){
        return(
            <div>
                <p>
                this is a class component,
                当前的name为:{this.state.name}
                <button onClick={()=>this.changeName()}>修改</button>
                <SCounter/>
                <ul>
                    {this.state.list.map((item,)=><li key={item}>{item}</li>)}
                </ul>
                <p>{this.state.person.name}</p>
                <button onClick={this.changeArray}>array</button>
                <button onClick={this.deleteArray}>delete</button>
                </p>
            </div>
        )
    }
}

export default ZState;


/*
    总结
1.编写组件其实就是编写原生JS类或者函数
2.定义状态必须通过state  实例属性的方法  提供一个对象，名称是固定的就叫做 state
3.修改state中的任何属性 都不可以直接赋值修改，必须走 setState函数，这个方法来自于继承得到。
4.this指向 很容易出现指向错误的问题，使用箭头函数是最推荐和最规范的，没有this指向性问题
*/

export function SCounter(props){
    const [counter,setCounter]=useState(0);
    return(
        <div>
            <p>hello p</p>
            <button onClick={()=>{setCounter(counter+1)}}>counter:{counter}</button>
        </div>
    )
}