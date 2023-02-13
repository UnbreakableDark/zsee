//react渲染列表  map方法
//注意，遍历列表时，需要给<li>一个独一无二的key属性，来提高diff算法的性能
//key仅在react内部使用，不会出现在真实DOM中
//条件渲染  1.三元运算符 ?:   通常用null来表示不显示
//2.逻辑与运算  &&

//数据
const games=[
    {id:1,name:"原神"},
    {id:2,name:"FGO"},
    {id:3,name:"碧蓝航线"},
    {id:4,name:"无名杀"}
];
let flag=true;

function Zlist(){
    return(
        <div>
            <h3>react 渲染列表</h3>
            <ul>
                {games.map(item=><li key={item.id}>{item.name}</li>)}
            </ul>
            {flag?"条件渲染":null}<br/>
            {flag && "逻辑与"}
        </div>
    )
}


export default Zlist;