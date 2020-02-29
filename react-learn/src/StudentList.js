import React from 'react';
import Student from './Student';
/**
 * name：String 名字
 * @param {name} props 
 */
export default function StudentList(props){
    console.log(props);
    const map =  props.name.map(item=>{
        return <Student key={item.id} name = {item.name} />
    });
return(
<ul>{map}</ul>
);
}