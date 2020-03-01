import React, { Component } from 'react'
import util from './util/util.js';
import Ball from './Ball';
import './css/index.css';
export default class BallList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            ballInfos:[]
        }

        setInterval(() => {
            let ballInfo = {
                left:util(0,document.documentElement.clientWidth-100),
                top:util(0,document.documentElement.clientHeight-100),
                xSpeed:util(0,500),
                ySpeed:util(0,500)
            }
            this.setState({
                ballInfos : [...this.state.ballInfos,ballInfo]
            });
        }, 1000);

    }
    render() {
       const arr =  this.state.ballInfos.map((item,i)=> <Ball key = {i} {...item}/>)
        return (
            <div>
                {arr}
            </div>

        )
    }
}
