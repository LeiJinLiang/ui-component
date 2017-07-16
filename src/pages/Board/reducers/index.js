import { combineReducers } from 'redux'
import { RECEIVE_DATA } from '../actions'


export  const  recieveImages = (state = [],action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_DATA:
            return action.list
        default:
            return state
    }

}