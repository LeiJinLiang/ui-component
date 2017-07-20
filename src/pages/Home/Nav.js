/**
 * Created by leijin on 2017/7/16.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './nav.css'

const Nav = ({data}) => (
    <div styleName='contanier'>
        <ul>
            {data.map((item,index)=>(
                <li styleName="item" key = {index}><Link to={item.path}>{item.name}</Link></li>
            ))}
        </ul>
    </div>
)

export default CSSModules(Nav, styles)