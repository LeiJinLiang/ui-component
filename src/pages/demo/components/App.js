import React , { Component } from 'react'
import Hello from './Hello'
import Change from './Change'
import Modal from '../../../components/Modal/Modal'

class App extends Component {
   constructor(props) {
       super(props)
   }
   render() {
       const { actions, text } = this.props
       return(
           <div>
               <Modal/>
               <Hello actions = { actions } text = {text} />
               <Change actions = { actions }/>
           </div>
       )
   }
}

export default App

