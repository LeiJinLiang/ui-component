import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
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
            <div styleName = "contanier">
                <header styleName="head">
                    <span styleName = "bg"></span>
                    <div styleName="form">
                        <input type="text" value = { value } onChange = { e => this.handleChange(e)} placeholder="Search for everything"/>
                    </div>
                </header>
                <ul styleName={ arr.length>0?"content":''}>
                    {arr.map((item,index)=> (
                        <li styleName="item" key = {index}>{item.value}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CSSModules(SearchForm,styles)

//style= {{ backgroundImage: 'url(' + Icon + ')', }}