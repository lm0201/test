import React from 'react';
import ReactDOM from 'react-dom';
import src1 from "./img/1.png";
import src2 from "./img/2.png";
import src3 from "./img/3.png";
import "./css/index.css";

var arr = [src1,src2,src3];
var index  = 0;
var container = document.getElementById('root');
var timer;


function render(){
        ReactDOM.render(<img src={arr[index]} alt=""/>,container);
}

function stop(){
    clearInterval(timer);
}

function start(){
    stop();
    timer = setInterval(() => {
        index = (index+1) % 3;
        ReactDOM.render(<img src={arr[index]} alt=""/>,container);
    }, 1000);
}


container.onmouseleave = function(){
    start();
    console.log(1);
   
};
container.onmouseenter = function(){
    stop();
    console.log(2);
};
render();
start();