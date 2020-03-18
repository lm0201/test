import React, { Component } from 'react'
import ctx from './Context'

export default class Button extends Component {
    static contextType = ctx;
    render() {
        return (
            <button onClick  = {
                ()=>{
                  console.log(this.context.formData ); 
                }
            }>{this.props.children}</button>
        )
    }
}
