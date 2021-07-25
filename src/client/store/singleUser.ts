import axios from 'axios'
import { Action, Reducer } from 'redux'
// import { createAction, createAsyncAction } from 'typesafe-actions'



/** Action Types */
const GET_SINGLE_USER: string = 'GET_SINGLE_USER'

/** Action Creators */

export const getSingleUserFunc = (user: {}) =>{
    return {
        type: GET_SINGLE_USER,
        user
    }
}

/** Thunks */

export const getSingleUserThunk = (userId: string | number) =>{
    return async(dispatch: any) =>{
        try {
        const {data} = await axios.get(`/api/users/${userId}`)
        dispatch(getSingleUserThunk(data))
        } catch (error) {
            console.log('problem in the singleUserThunk: ', error)
        }
    }
}

//typescript typing and such
//state
export interface SingleUserState{
    user: {}
}

const initialState: SingleUserState = {
    user: {}
}

//actions
interface SingleUserAction{
    type: typeof GET_SINGLE_USER
}

/** Reducer */

const singleUserReducer: Reducer< SingleUserState, SingleUserAction> = (
    state=initialState, 
    action:any) =>{
    switch(action.type){
        case GET_SINGLE_USER:
        return action.user;
        default: 
        return state
    }
}

export default singleUserReducer