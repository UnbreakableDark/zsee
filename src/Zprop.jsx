import React,{useState} from "react";
//里面有各种各样的内置的校验规则
import PropsTypes from "prop-typesx"
//props进阶


class ZProp extends React.Component{

    //2.
    static defaultProps={
        pageSize:10,
    }
    render(){
        return(
            <div>
                <Zprop list={[1,2,3]}>children属性</Zprop>
            </div>
        )
    }
}

//ZProp.defaultProps={pageSize:10}

export default ZProp;

function Zprop({pageSize=10,list=[1,2,3]}){
    return(
        <div>{pageSize}</div>
    )
}

Zprop.propsTypes={
    list:PropsTypes.array,//限定 list参数的类型必须是数组
}

//Zprop.defaultProps={pagesize=10}

/*
    children属性
    表示该组件的子节点，只要组件内部有子节点，props中就有该属性
    children可以是什么：
1.普通文本  2.普通标签元素  3.函数   4.JSX


    props类型校验
步骤：
1.安装属性校验包：npm install prop-types
2.导入 prop-types包
3.使用  组件名.propTypes={} 给组件添加校验规则。

    props校验-规则说明：
    四种常见结构
1.常见类型： array,boolean,function,number,object,string
2.React元素类型：element
3.必填项:  isRequired
4.特定的结构对象: sharp({})

    默认值
    通过defaultProps可以给组件的props设置默认值，在未传入props的时候生效
    函数组件默认值
1.使用  组件名.defaultProps={}
2.使用函数参数默认值

    类组件默认值
1.使用  组件名.defaultProps={}
2.使用 类的静态属性
*/