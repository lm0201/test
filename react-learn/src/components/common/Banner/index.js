import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './index.css'
import ImgContainer from './imgContainer'
import Arrow from './ArrowContainer'
import Dots from './DotContainer'
export default class index extends Component {
    
    //默认值
    static defaultProps = {
        width:520,
        height:300,
        imgSrcs:[],
        autoDuration:3000,
        duration:1500
    }

    static propTypes = {
        width:PropsTypes.number.isRequired,//容器宽度
        height:PropsTypes.number.isRequired,//容器高度
        imgSrcs:PropsTypes.arrayOf(PropsTypes.string).isRequired,//图片数组
        autoDuration:PropsTypes.number,//自动切换的间隔时间
        duration:PropsTypes.number//完成一张切换的时间
    }

    state={
        curIndex:0
    }
    handelArrow = type =>{
        var cur = this.state.curIndex;
        if(type === 'left'){
            cur--;
            if(cur < 0){
                cur=this.props.imgSrcs.length -1;
            }
        } else {
            cur++;
            if(cur > this.props.imgSrcs.length -1){
                cur=0;
            }
        }
        this.setState({
            curIndex:cur
        });
        this.handleSwicth(cur);
    }
    handelDot = index =>{
        this.setState({
            curIndex:index
        });
        this.handleSwicth(index);
    }

    imgsContainer = e =>{
        this.div = e;
    }

    handleSwicth(index){
        console.log('div:',this.div)
        this.div.switchTo(index);
    }

    render() {
        
        return (
            <>
            <div className = "banner-container"style={{
                width:this.props.width,
                height:this.props.height
            }}>
            
            <ImgContainer ref = {this.imgsContainer} 
            imgSrcs = {this.props.imgSrcs}
            autoDuration = {this.props.autoDuration}
            duration = {this.props.duration}
            />
            <Arrow onChange = {this.handelArrow}/>
            <Dots onChange = {this.handelDot} 
                totle = {this.props.imgSrcs.length}
                curIndex = {this.state.curIndex}
            />
            </div>
            
            
            </>
        )
    }
}
