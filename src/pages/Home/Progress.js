import React, { Component } from 'react'
import styles from './progress.css'

class Progress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : true
        }
    }
    componentDidMount () {
        this.setTimer()
    }

    setTimer = (start) => {
        let _this = this
        if(!start) {
            start = 0
        }
       const setIntervalID = setInterval(function () {
            start = start + Math.floor(Math.random()*10 + 1)
            if(start >= 100) {
                _this.setState({ show : false})
                clearInterval(setIntervalID)
            }
        },100)
    }

    render() {
       let { show } = this.state
       return(
            <div>
                {show?<div className={styles.progress}></div>:''}
            </div>
       )


    }
}

export default Progress