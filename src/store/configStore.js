import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';



//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

//store.dispatch 参数只能是对象,不能是函数

export default function configureStore(preloadedState) {
    const store = createStoreWithMiddleware(rootReducer, preloadedState);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}