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
        // console.log('this.props',this.props.actions)
    }

    handleData = () => {
        this.props.actions.fetchData()
    }

    render(){
        let { show } = this.state
        let { info } = this.props
        return(
            <div>
                    {show ?
                    <div styleName = 'container' onClick = {this.handleData}>
                        <div styleName = 'content'>
                            <label onClick = {this.handleClick} >X</label>
                            <h4>Modal title</h4>
                            <p>{info?info.msg:''}</p>
                        </div>
                    </div> :''}
            </div>
        )
    }
}

export default CSSModules(Modal,styles)