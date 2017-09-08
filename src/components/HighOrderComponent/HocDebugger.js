import React, { Component } from 'react'
import { serialize , chunk , randomLetter, repeatedEle, arrowOrder } from '../../utils/utils'
const replacer = (key, value) => {
    if(typeof value === 'function') {
      return `function ${value.name}() {...}`
    }
    return value
}

const stringify = value =>{
    return JSON.stringify(value, replacer, 2)
}

const IIHOC = (WrappedComponent) => (
    class II extends WrappedComponent {
        render() {
            return(
                <div>
                    <h2>
                        HOC Debugger Component
                    </h2>
                    <p>
                       Props
                    </p>
                    <pre>{stringify(this.props)}</pre>
                    <p>
                        State
                    </p>
                    <pre>{stringify(this.state)}</pre>
                    {super.render()}
                </div>
            )
        }
    }
)

const data = [12,123,1234,453,436,23,23,5,4123,45,346,5634,2234,345,342]

@IIHOC
class HocDebugger extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'taozi',
            email : 'reg_taozi@163.com',
            number : '',
            letter : ''
        }
    }

    componentDidMount () {
        this.state.letter = randomLetter(5)
        chunk(data, (item)=>{
           this.setState({ number: item})
        })
    }

    render(){
        const {number, letter} = this.state
        return(
            <div>
                <h2>
                    Wrapped Component {number} ---- {letter}
                </h2>
                <p>This is a wrapped component</p>
            </div>
        )
    }
}

const bankAccount = '6228480402564890018'
let _bank = serialize(bankAccount)
console.log('_bank',_bank())
let letter = ['1','1','a',1, 1, 2]
repeatedEle(letter)

let test = [3,0,1,-1,2,10]
console.log(arrowOrder(test))
export default  HocDebugger