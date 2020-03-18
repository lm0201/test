import React, { Component } from 'react'

export default class index extends Component {
    state={
        loginId:"",
        loginPwd:"",
        sex:"male",
        chooesloves:[],
        loves:[
            {value:'',text:''},
            {}
        ],
        city:""
    }
    render() {


        return (
            <div>
            <input type="text"
                name = ''
                value = {this.state.loginPwd}
            />
            </div>
        )
    }
}
