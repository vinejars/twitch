import { combineReducers } from 'redux'
import singleUserReducer from './singleUser'

const appReducer = combineReducers({
    user: singleUserReducer
})

export default appReducer