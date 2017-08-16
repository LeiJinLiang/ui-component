import React, { Component } from 'react'
import { Enhance } from "./Enhance"

@Enhance
class MyComponent extends Component{
    render() {
        if (!this.props.data) return <div>Waiting...</div>;
        return <div>{this.props.data}</div>;
    }
}

export default MyComponent