import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './modal.css'

import * as qs from 'qs'
class Modal extends Component {
    constructor(props) {
         super(props)
         this.state = {
             show : 1
         }
    }

    handleClick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        this.setState({ show : 0})
    }

    componentDidMount () {
        this.handleData()
    }

    handleData = () => {
        this.props.actions.fetchData(`http://10.199.73.113:8080/tasks`)
    }

    handleAdd = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.props.actions.fetchPost('http://10.199.73.113:8080/tasks',  qs.stringify({name : JSON.stringify({ age : 25, sex : 1})}))
    }

    handleDelete = (e,id) => {
        e.preventDefault()
        e.stopPropagation()
        this.props.actions.fetchDelete(`http://10.199.73.113:8080/tasks/`+id)
    }

    render(){
        let { show } = this.state
        let { info } = this.props
        console.log('this.props',this.props)
        return(
            <div>
                    {show ?
                    <div styleName = 'container' onClick = {this.handleData}>
                        <div styleName = 'content'>
                            <label onClick = {this.handleClick} >X</label>
                            <h4>Modal title</h4>
                            {info&&info.map((item,idx)=> (
                                <p onClick = { (e,id) => this.handleDelete(e,item._id)} key = {idx}>{item._id}</p>
                            ))}
                            <button styleName = 'btn' onClick = {this.handleAdd }>add</button>
                        </div>
                    </div> :''}
            </div>
        )
    }
}

export default CSSModules(Modal,styles)