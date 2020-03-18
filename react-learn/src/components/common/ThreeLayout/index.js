import React, { Component } from 'react'
import './index.css';
export default class index extends Component {
    state={
        width:'200px'
        
    }
    render() {
        return (
            <div className="content">

                <div className="main" >中</div>

                <div className="left"style={{
                    width : this.state.width
                }}>左</div>

                <div className="right" style={{
                    width : this.state.width
                }}>右</div> 

            </div>
        )
    }
}



