import React , { Component } from 'react'
export const Enhance = ComposedComponent => class extends Component {
    constructor(props) {
        super(props)
        this.state = {data : null}
    }
    componentDidMount () {
        this.setState({ data : 'Hello'})
    }
    render() {
        return <ComposedComponent {...this.props} data = {this.state.data}/>
    }
}