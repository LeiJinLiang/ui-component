import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/resume.css'

const arr = [
    { title : 'cloudCross',
        discirption : "autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use."
    },
    { title : 'cloudCross2',
        discirption : "autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use.autoprefixer adds vendor prefixes, using data from Can I Use."
    }
]

class Resume extends Component {
    constructor (props) {
        super(props)
        this.state  = {
            data : arr,
            show : arr.map((item)=> ({ isShow : true})),
            flag : arr.map((item)=> ({ isFlag : false}))
        }
    }

    handleToogle = (idx) => {
        this.state.flag[idx].isFlag = true
        this.state.show[idx].isShow = !this.state.show[idx].isShow
        this.setState({
            show : this.state.show
        })
    }

    render() {
        const { show , flag , data} = this.state
        return (
            <div styleName = "container">
                <ul>
                    {data.map((item,index)=>{
                        const  _show = show[index].isShow?'height2':'height1'
                        return (
                            <li key ={index}>
                                <p>July 2014</p>
                                <div className= {styles.left} styleName = {!flag[index].isFlag?'':_show}>
                                    <i onClick = { idx => this.handleToogle(index)}></i>
                                    {show[index].isShow?<i></i>:''}
                                </div>
                                <div className= {styles.right} styleName = {!flag[index].isFlag?'':_show}>
                                    <h1>{item.title}</h1>
                                    <strong>{item.discirption}</strong>
                                </div>
                                <p>March 2016</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CSSModules(Resume,styles)