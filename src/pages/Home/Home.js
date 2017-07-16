import React , { Component } from 'react'

class Home extends Component {
    render() {
        return(
            <section>
                home
                <div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}


module.exports = Home
