import React, { Component } from 'react'
import Icon from '../../images/search.png'
import styles from './search.css'


class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value : '',
            arr : []
        }
    }

    handleChange = (e) => {
        let _arr = []
        if(e.target.value ){
            _arr.push({ value : e.target.value })
        }
        this.state.arr = _arr
        this.setState({
            value : e.target.value
        })
    }

    render() {
        const { value , arr } = this.state
        return(
            <div className = { styles.contanier }>
                <header className={styles.head}>
                    <span className = {styles.bg}></span>
                    <div className={styles.form}>
                        <input type="text" value = { value } onChange = { e => this.handleChange(e)} placeholder="Search for everything"/>
                    </div>
                </header>
                <ul className={ arr.length>0?styles.content:''}>
                    {arr.map((item,index)=> (
                        <li className={ styles.item } key = {index}>{item.value}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SearchForm

//style= {{ backgroundImage: 'url(' + Icon + ')', }}