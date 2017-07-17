/**
 * Created by leijin on 2017/7/16.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPostsIfNeeded } from '../actions'
import Board from '../components/Board'
import * as listAction from '../actions'

class BoardCon extends  Component {
    componentDidMount () {
        const { dispatch } = this.props
        this.props.actions.fetchPostsIfNeeded('edu_banner')
    }

    render() {
        const {images} = this.props
        return(
            <div>
                {images.result?<Board images = {images.result}/>: 'Empty'}
            </div>
        )
    }
}


const mapStateToProps = state => {
    //console.log('state',state)
    return { images : state.recieveImages}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(listAction,dispatch)
    }
}

module.exports = connect(mapStateToProps,
    mapDispatchToProps)(BoardCon)