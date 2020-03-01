import React, { Component } from 'react'

export default class ball extends Component {
    //首先，做一個小球，
    //top left xSpeed ySpeed

    constructor(props){

        super(props);

        this.state = {

            top:props.top,

            left:props.left,

            ySpeed:props.ySpeed,

            xSpeed:props.xSpeed
        }
        const duration = 15 ;
        setInterval(() => {
            let newTop = this.state.ySpeed * duration /1000;
            let newLeft = this.state.xSpeed * duration /1000;
            this.setState({
                top:newTop+this.state.top,
                left:newLeft+this.state.left
            });
            if(this.state.top<=0){
                this.setState({
                    top:0,
                    ySpeed : -this.state.ySpeed
                });
                
            }
            if(this.state.top>=document.documentElement.clientHeight-100){
                this.setState({
                    top:document.documentElement.clientHeight-100,
                    ySpeed : -this.state.ySpeed
                });
            }

            if(this.state.left<=0){
                this.setState({
                    left:0,
                    xSpeed : -this.state.xSpeed
                });
                
            }
            if(this.state.left>=document.documentElement.clientWidth-100){
                this.setState({
                    left:document.documentElement.clientWidth-100,
                    xSpeed : -this.state.xSpeed
                });
            }
        }, duration);
    }
    render() {
        return (
            <div className="ball" style = {{
                left:this.state.left,
                top:this.state.top
            }}>
                
            </div>
        )
    }
}
