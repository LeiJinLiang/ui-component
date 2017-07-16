import React , { Component } from 'react'
import Nav from './Nav'
require('../../style/common.css')

const nav = [
    {name : 'demo1', path: '/demo'},
    {name : 'demo2', path: '/list'},
    {name : 'demo3', path: '/demo'}
]

class Home extends Component {
    render() {
        return(
            <section>
                <Nav data = {nav}/>
                <div style={{ marginTop : '50px'}}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}


module.exports = Home
