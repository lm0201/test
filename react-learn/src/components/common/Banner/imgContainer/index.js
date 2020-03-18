import React, { Component } from 'react'
import PropsTypes from "prop-types";
import './index.css';
export default class index extends Component {
    static defaultProps = {
        width:520,
        height:300,
        imgSrcs:[]
    }
    static propTypes = {
        width:PropsTypes.number.isRequired,
        height:PropsTypes.number.isRequired,
        imgSrcs:PropsTypes.arrayOf(PropsTypes.string).isRequired
    }
    /**
     * 获取dom元素
     */
    containerRef = e =>{
        this.div = e;
    }
    
    /**
     * 目标 下标 
     * @param {} index 
     */
    switchTo(index){
        
        if(index < 0){
            index = 0;
        }else if (index >this.props.imgSrcs.length-1){
            index = this.props.imgSrcs.length-1;
        }
        const tike = 16;
        //1.目标位置
        let target =  -index * this.props.width;
        //当前位置
        let cur = parseFloat(getComputedStyle(this.div).marginLeft);
        //目标总距离
        const totle = target - cur;
        //运动次数
        const times = Math.ceil(this.props.autoDuration/tike);
        //一次运动的距离
        let dis = totle / times;
        let curTimes = 0;//初始次数
        console.log("target",target,"cur",cur,"totle",totle,"times",times);
        clearInterval(timer);
        var timer = setInterval(() => {
            
            curTimes++;
           let marginLeft = cur +=dis;
        this.div.style.marginLeft = +marginLeft+"px";
            if(curTimes == times){
                clearInterval(timer);
                this.div.style.marginLeft += target+"px";
            }
        }, tike);
        
    }

    render() {
        const img = this.props.imgSrcs.map((item,i)=>{return <img src ={item} key = {i} style = {{
            width:this.props.width,
            height:this.props.height
        }}/>});
       
        return (
            <div ref = {this.containerRef} className = "container" style = {{
                width:this.props.width * this.props.imgSrcs.length,
                hegiht:this.props.height
            }}>
                {img}
            </div>
        )
    }
}
