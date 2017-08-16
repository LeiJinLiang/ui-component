import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './gotop.css'



class GoTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow : false
        }
    }

    getScrollTop =() => {
        let scrollTop=0;
        if(document.documentElement&&document.documentElement.scrollTop) {
            scrollTop=document.documentElement.scrollTop;
        } else if(document.body) {
            scrollTop=document.body.scrollTop;
        }
        return scrollTop;
    }

    getClientHeight = () => {
        let  clientHeight=0;
        if(document.body.clientHeight&&document.documentElement.clientHeight) {
            clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        } else {
            clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }
        return clientHeight;
    }

    handleClick = () => {

        requestAnimationFrame(function aa () {
            var scTop = document.body.scrollTop;
            if (!scTop) return;
            document.body.scrollTop -= 80;
            requestAnimationFrame(aa)
        })
    }

    componentDidMount () {
        let _this = this
        window.addEventListener('scroll',()=>{
           _this.state.isShow = (_this.getScrollTop()+400 > _this.getClientHeight())
           this.setState({ isShow : _this.state.isShow })
        },false)
    }

    render () {
        let { isShow } = this.state
        return(
            <section>
                {isShow? <div styleName = 'container' onClick = {this.handleClick}>
                    顶部
                    <span styleName = 'triangle'></span>
                </div> :''}
            </section>
        )
    }
}

export default CSSModules(GoTop, styles)

