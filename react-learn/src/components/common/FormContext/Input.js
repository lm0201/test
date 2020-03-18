import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Ctx from './Context'
export default class Input extends Component {
    static contextType = Ctx;
    static defaultProps={
        type : 'text'
    }
    static propTypes = {
        name : PropTypes.string.isRequired,
        type :PropTypes.string.isRequired
    }
    render() {
        return (
                <input type = {this.props.type} name = {this.props.name} 
                value = {this.context.formData[this.props.name]||""}
                onChange = {e=>{
                    this.context.onChangeForm(this.props.name,e.target.value);
                }}
                />
        )
    }
}
