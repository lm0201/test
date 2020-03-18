import React, { Component } from 'react'
const CompA = React.createContext();
export default class index extends Component {
     state = {
         name:'liu',
         age:3
     }
    render() {
        return (

            <CompA.Provider value = {this.state}>
            <ChildA/>
            </CompA.Provider>
        )
    }
}
class ChildA extends Component {
    static contextType = CompA;
    render(){
        return (
            <div>
                {this.context.name}
            
            </div>
        )
    }
}