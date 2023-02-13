import "./Zstyle.css"
//学习jsx控制样式
//1.内联样式(行内样式):再元素身上绑定一个style属性即可,驼峰写法
//2.类名样式：再元素身上绑定一个className属性即可

const style1={
    color:"red",
    fontSize:"25px",
}

const activeFlag=true;
//动态控制类名
function Zstyle(){
    return(
        <div>
            <p style={{color:"red",fontSize:"30px"}}>样式控制</p>
            <p style={style1}>行内样式2</p>
            <p className={activeFlag?"red":""}>className样式</p>
        </div>
    )
}

export default Zstyle;