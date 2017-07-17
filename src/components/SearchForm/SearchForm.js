import React from 'react'
import Icon from '../../images/search.png'
import styles from './search.css'


const SearchForm = ({}) => (
    <div className = { styles.contanier }>
        <header className={styles.head}>
            <span className = {styles.bg} style= {{ backgroundImage: 'url(' + Icon + ')', }}></span>
            <div className={styles.form}>
                <input type="text" placeholder="Search for everything"/>
            </div>
        </header>
    </div>
)

export default SearchForm
