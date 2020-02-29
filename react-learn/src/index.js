import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './StudentList';
import StudentClass from './StudentClass.js';
const appkey = 'demo13_1545210570249';

async function fecthAll() {
    const stus = await fetch('http://api.duyiedu.com/api/student/findAll?appkey=' + appkey)
        .then(resp => resp.json()).then(resp => resp.data);
    return stus;

}

async function render() {
    const data = await fecthAll();
    ReactDOM.render(<StudentClass name={data} />, document.getElementById('root'));
}


render();



//首先获取服务器的学生数据。然后，把数据解析了返回。
//渲染，写一个函数，然后，写上模板，调用组件，渲染到页面。
//组件 拿到传递的数据，解析数据

//http://api.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249

