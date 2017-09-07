import React ,{ Component } from 'react'

const PPHOC = (WrappedComponent) => {
    class PP extends Component {
        constructor(props){
            super(props)
            this.state = {
                name : 'PPHOC'
            }
            this.onNameChange = this.onNameChange.bind(this)
        }

        onNameChange  (event){
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
            console.log('newProps',newProps)
            return <WrappedComponent {...props} {...newProps}/>
        }
    }
}



function subperhero(target) {
    target.isSuperhero = true;
    target.power = 'flight';
}

@subperhero

class MySuperHero {

}

console.log('MySuperHero',new MySuperHero())

@PPHOC
class HocExample extends Component {
    render() {
        return <input name ='name' {...this.props.name}/>
    }
}


export default HocExample