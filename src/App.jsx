
import './App.css';
import ZHooks from './ZHooks';
function App() {
  return(
    <div className="App">
      <h2 style={{textAlign:"center"}}>效果</h2>
      <ZHooks></ZHooks>
    </div>
  )
}

export default App;





//import Login from './Login'
//import Zlist from './Zlist';//1.JSX的使用,列表渲染，条件渲染
//import Zstyle from './Zstyle';2.JSX 样式控制
//import ZClass,{ZFunc} from './ZCom';//3.类组件 函数绑定  获取事件对象e
//import ZState from './ZState'  //4.state,setState
//import ZForm from './ZForm';//5.受控组件，非受控组件
//import ZFather,{Zfather} from './ZFather';//6.父传子，子传父
//import ZBrother from './ZBrother';//7.兄弟传值
//import ZContext from './ZContext';//8跨子组件层传值 Context语法 Provider,Consumer
//import ZProp from './Zprop';9.组件children属性，props 类型校验，默认值等