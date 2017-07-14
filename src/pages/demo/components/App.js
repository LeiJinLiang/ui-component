import React , { Component } from 'react'
import Hello from './Hello'
import Change from './Change'

class App extends Component {
   constructor(props) {
       super(props)
       console.log(this.props)
   }
   render() {
       const { actions, text } = this.props
       return(
           <div>
               <h1>222222</h1>

           </div>
       )
   }
}

export default App

//<Hello actions = { actions } text = {text} />
//    <Change actions = { actions }/>