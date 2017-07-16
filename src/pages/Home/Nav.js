/**
 * Created by leijin on 2017/7/16.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './nav.css'

const Nav = ({data}) => (
    <div className={styles.contanier}>
        <ul>
            {data.map((item,index)=>(
                <li className={styles.item} key = {index}><Link to={item.path}>{item.name}</Link></li>
            ))}
        </ul>
    </div>
)

export default Nav