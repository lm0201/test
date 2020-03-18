import React, { Component } from 'react'

export default class Checked extends Component {
    state={
        value : 123,
        loves:['古筝','吉他','钢琴','其他'],
        chooesLoves:['古筝','吉他']
    }
    render() {
        var arr = this.state.loves.map(item=>( <label key={item}>
            <input type="checkbox" checked = { this.state.chooesLoves.includes(item)}
            onChange={e=>{
                if(e.target.checked){
                    this.setState({
                        chooesLoves:[...this.state.chooesLoves,item]
                    });
                }else{
                    this.setState({
                        chooesLoves:this.state.chooesLoves.filter(l=>l!==item)
                    })
                }
            }}
            />
            {item}
        </label>
        )
    );


        return (
            <div>
                {arr}
                <button onClick={()=>{
                    console.log(this.state.chooesLoves);
                }}>获取文本框的值</button>
            </div>
        )
    }
}
