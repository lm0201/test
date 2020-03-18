import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class index extends Component {
static propsTypes = {
    totle :PropTypes.number.isRequired,
    curIndex:PropTypes.number.isRequired,
    onChange:PropTypes.func
}
    render() {
        let arr = [];
        console.log(this.props.curIndex);
        for (let i = 0; i < this.props.totle; i++) {
            arr.push(<span key = {i} 
                className = {this.props.curIndex===i?'active':''} 
                onClick = {()=>{this.props.onChange && this.props.onChange(i)}}
                ></span>);
        }

        return (
            <div className = 'dots'>
               {arr} 
            </div>
        )
    }
}
