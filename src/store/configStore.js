import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
     thunk
)(createStore)

export default function configureStore(preloadedState) {
      const store = createStoreWithMiddleware(rootReducer, preloadedState)
      if(module.hot) {
            module.hot.accept('../reducers',() => {
                const nextReducer = require('../reducers').default
                store.replaceReducer(nextReducer)
            })
      }
    return store
}
