import React , { Component } from 'react'
import Hello from './Hello'
import Change from './Change'

class App extends Component {
   constructor(props) {
       super(props)
   }
   render() {
       const { actions, text } = this.props
       return(
           <div>
               <Hello actions = { actions } text = {text} />
               <Change actions = { actions }/>
           </div>
       )
   }
}

export default App

