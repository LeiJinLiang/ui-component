import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/resume.css'

class Resume extends Component {
    constructor (props) {
        super(props)
        this.state  = {
            show : true
        }
    }

    handleToogle = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        const { show } = this.state
        return (
            <div styleName = "container">
                <ul>
                    <li>
                        <p>July 2014</p>
                        <div className= {styles.left} styleName = {show?'height2':'height1'}>
                            <i onClick = {this.handleToogle}></i>
                            {show?<i></i>:''}
                        </div>
                        <div styleName = 'right'>
                            <h1>cloudcross</h1>
                            autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.
                            autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.
                            autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.
                        </div>
                        <p>March 2016</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CSSModules(Resume,styles)