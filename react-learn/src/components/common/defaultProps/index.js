import React, { Component } from 'react'

export default class index extends Component {
    static defaultProps={
        name :"11"
    }
    render() {
        console.log(this.props.name)
        return (
            <div>
                
            </div>
        )
    }
}
