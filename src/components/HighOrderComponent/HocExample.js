import React, { Component } from 'react'

// const withLogger = (WrappedComponent) => (
//     class ClickLogger extends Component {
//         constructor(props) {
//             super(props)
//         }
//         onClick = (e) => {
//             console.log(e)
//         }
//         render() {
//             const { title , content } = this.props
//             return(
//                 <div>
//                     <WrappedComponent {...this.props} onClick = {this.onClick}/>
//                 </div>
//             )
//         }
//     }
// )
//
// @withLogger
//

const ppHoc = (WrappedComponent) =>(
    class PP extends Component{
        constructor(props) {
            super(props)
            this.state = {
                name : ''
            }
        }
        onNameChange = (event) => {
            this.setState({
                name : event.target.value
            })
        }
        render(){
            const newProps = {
                name : {
                    value : this.state.name,
                    onChange : this.onNameChange
                }
            }
            return <WrappedComponent {...this.props} {...newProps}/>
        }
    }
)


// 通过props将Onchange 事件和 value 传递给被装饰的组件

@ppHoc
class HocExample extends Component{
   render() {
       console.log('HocExample',this.props)
       return <input name = 'name' {...this.props.name}/>
   }
}

export default  HocExample



