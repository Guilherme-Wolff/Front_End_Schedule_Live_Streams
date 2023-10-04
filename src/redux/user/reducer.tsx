import {createSlice} from "@reduxjs/toolkit"

import UserActionTypes from "./action-types"
interface userState {
    user:{
        name:string | null;
    } | null
}
const initialState:userState = {
    user: {
        name:null,
    }
}
export const userReducerSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        login:(state:userState = initialState, action:any) =>{
            state.user = action.payload;
        },
        register:(state:userState = initialState, action:any) =>{
            state.user = action.payload;
        },
        logout:(state:userState = initialState, action:any) =>{
            state.user = null;
        }
    }
})


/*const userResducer = (state = initialState, action:any) => {
    switch (action.type){
        case UserActionTypes.LOGIN:
            return {...state,currentUser: action.payload}
        case UserActionTypes.REGISTER:
            return {...state,currentUser: action.payload}
        case UserActionTypes.LOGOUT:
            return {...state,currentUser: null}
    default:
        return state;
    }

};*/

export const {login,register,logout} = userReducerSlice.actions
export const userReducer = userReducerSlice.reducer;