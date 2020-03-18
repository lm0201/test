import React, { Component } from 'react'
import Form from './index'

export default class test extends Component {
    render() {
        return (
            <div>
               <Form>
                <div>姓名：<Form.Input name = "loginId"/></div>
                <div>密码：<Form.Input name = "pwd" type = "password"/></div>
                <div>密码：<Form.Button >submit</Form.Button></div>
               </Form> 
            </div>
        )
    }
}
