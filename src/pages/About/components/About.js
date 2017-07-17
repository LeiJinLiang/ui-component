import React, { Component } from 'react'
import SearchForm from '../../../components/SearchForm/SearchForm'
import * as response from '../../../mock/about'
import styles from '../styles/about.css'


const About = () => {
    let result = response.result
    return(
        <div className={styles.container}>
            <SearchForm />
            <h1>{result.name}</h1>
            <h1>{result.shcool}</h1>
            <h1>{result.background}</h1>
        </div>
    )
}


module.exports = About