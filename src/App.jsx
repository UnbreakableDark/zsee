
import './App.css';
//import Login from './Login'
//import Zlist from './Zlist';//1.JSX的使用,列表渲染，条件渲染
//import Zstyle from './Zstyle';2.JSX 样式控制
//import ZClass,{ZFunc} from './ZCom';//3.类组件 函数绑定  获取事件对象e
import ZState from './ZState'

function App() {
  return(
    <div className="App">
      <h2 style={{textAlign:"center"}}>效果</h2>
      <ZState/>
    </div>
  )
}

export default App;
