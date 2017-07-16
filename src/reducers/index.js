import { combineReducers } from 'redux'
import { Demo } from '../pages/demo/reducers'
import { recieveImages } from '../pages/Board/reducers'
const rootReducer = combineReducers({
    Demo,
    recieveImages
})

export default rootReducer

