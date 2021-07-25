import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import appReducer from './index'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

let middleware =[thunkMiddleware.withExtraArgument({ axios })]


export default createStore(
  appReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)