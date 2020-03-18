import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
export default class Arrow extends Component {
    static PropsTypes = {
        onChange:PropTypes.func
    }
    render() {
        return (
            <div className = 'arrow'>
                <span className='left' onClick={()=>this.props.onChange && this.props.onChange('left')}>
                &lt;
                </span>
                <span className='right' onClick={()=>this.props.onChange && this.props.onChange('right')}>
                &gt;
                </span>
            </div>
        )
    }
}
