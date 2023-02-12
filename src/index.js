import React from 'react';//核心包
import ReactDOM from 'react-dom/client';//专门做渲染相关的包
import './index.css';//全局样式文件
import App from './App';//根组件


//渲染根组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

