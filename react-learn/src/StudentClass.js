import React from 'react';
import Student from './Student';
export default class studentClass extends React.Component{
    render(){
       const map = this.props.name.map(item=>{
        return <Student key = {item.id} name = {item.name}/>
             
        });
        return(
        <ul>{map}</ul>
        )
    }
}