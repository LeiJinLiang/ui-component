import React , { Component } from 'react'
import Nav from './Nav'
import Progress from './Progress'

require('../../style/common.css')

const nav = [
    {name : 'demo1', path: '/demo'},
    {name : 'demo2', path: '/list'},
    {name : 'demo3', path: '/board'}
]

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <section>
                <Progress />
                <Nav data = {nav}/>
                <div style={{ marginTop : '60px', padding : '0 20px 0 20px'}}>
                    {this.props.children}
                    CONTACT :  <a href="mailto:reg_taozi@163.com">reg_taozi@163.com</a>
                </div>
            </section>
        )
    }
}


module.exports = Home
