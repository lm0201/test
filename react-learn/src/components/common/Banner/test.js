import React, { Component } from 'react'
import A from './index'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'

export default class test extends Component {

    render() {
        return (
            <div>
                <A imgSrcs = {[img1,img2,img3,img4]} autoDuration = {500} Duration = {300}/>
            </div>
        )
    }
}
