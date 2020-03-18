import React, { Component } from 'react'
import ctx from './Context'
import Input from './Input'
import Button from './Button'
export default class Form extends Component {
    state = {
        formData:{},
        onChangeForm:(name,val)=>{
            this.setState({
                formData:{
                    ...this.state.formData,
                    [name]:val
                }
            });
        }
    }
    render() {
        return (
            <ctx.Provider value = {this.state}>
                {this.props.children}
           </ctx.Provider> 
        )
    }
}
Form.Input = Input
Form.Button = Button