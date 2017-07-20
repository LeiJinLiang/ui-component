import React, { Component } from 'react'
import SearchForm from '../../../components/SearchForm/SearchForm'
import Resume from './Resume'
import * as response from '../../../mock/about'
import CSSModules from 'react-css-modules'
import styles from '../styles/about.css'


const About = () => {
    let result = response.result
    return(
        <div styleName="container">
            <SearchForm />
            <Resume />
        </div>
    )
}


module.exports = CSSModules(About,styles)