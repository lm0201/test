import React, { Component } from 'react'
import Model from './index'
export default class test extends Component {
    state={
        is:false
    }
    hide = hide=>{
        this.setState({
            is : false
        })
    }
    show = show=>{
        this.setState({
            is : true
        })
    }
    render() {
        return (
            <div>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583413151730&di=212a3c6ce0c6703105f82dcdb0b10dc0&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830180834_XuWYJ.png" alt=""/>
               { this.state.is ?
                (<Model onClick={()=>{this.hide()}}>
                <h1>hello</h1>
                <button onClick = {this.hide}>取消</button>
               </Model>):null
               
               }
               <button onClick={this.show}>加上</button>
            </div>
        )
    }
}

