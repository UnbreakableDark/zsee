import React, { createContext } from "react";

const {Provider,Consumer}=createContext();

class ZContext extends React.Component{
    state={
        message:"send"
    };
    render(){
        return (
            <Provider value={this.state.message}>
                <div>
                    <ComA/>
                </div>
            </Provider>
        )
    }
}

export default ZContext;

function ComA(props){
    return(
            <div>
                <p>this is a</p>
                <ComC/>
            </div>
    )
}

//Comsumer标签中不能夹杂任何语句
function ComC(props){
    return(
        <div>
        <Consumer>
            {value=><p>{value}</p>}
    </Consumer>
    <p>hehe</p>
    </div>
    )
}

/*
    实现步骤
1.创建Context对象 导出  Provider,Consumer 对象。
2.使用Provider包裹根组件提供数据
3.需要用到数据的组件使用Consumer包裹获取数据
*/