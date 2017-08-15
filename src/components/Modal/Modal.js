import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './modal.css'

class Modal extends Component {
    constructor(props) {
         super(props)
         this.state = {
             show : 1
         }
    }

    handleClick = () => {
        this.setState({ show : 0})
    }

    render(){
        let { show } = this.state
        return(
            <div>
                    {show ?
                    <div styleName = 'container'>
                        <div styleName = 'content'>
                            <label onClick = {this.handleClick} >X</label>
                            <h4>Modal title</h4>
                            <p>conent conent content content</p>
                        </div>
                    </div> :''}
            </div>
        )
    }
}

export default CSSModules(Modal,styles)