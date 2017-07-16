import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import {changeText, buttonClick } from '../actions'

const mapStateToProps = (state) => {
    return { text : state.Demo.text}
}

//mapDispatchToProps 的作用是把 store 中的 dispatch 方法注入到组件里
// store.dispatch 是view 发出 action 的唯一方法

const mapDispatchToProps = dispatch => (
{ actions : bindActionCreators({ changeText : changeText, buttonClick : buttonClick}, dispatch)}
)

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)