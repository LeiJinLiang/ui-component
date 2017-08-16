import React , { Component } from 'react'
import Hello from './Hello'
import Change from './Change'
import Modal from '../../../components/Modal/Modal'
import MyComponent from '../../../components/HighOrderComponent/HighOrderComponent'
class App extends Component {
   constructor(props) {
       super(props)
   }
   render() {
       const { actions, text , mock} = this.props
       return(
           <div>
               <MyComponent />
               <Modal actions = {actions} info = {mock}/>
               <Hello actions = { actions } text = {text} />
               <Change actions = { actions }/>
           </div>
       )
   }
}

export default App

