import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IAuth {
    user: {
        name: string | null;
        tokenJWT?: string | null;
    } | null
}
const initialState: IAuth = {
    user: {
        name: '',
        tokenJWT: ''
    }
}

const LogOut_State: IAuth = {
    user: {
        name: '',
        tokenJWT: ''
    }
}


export const userReducerSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setJwt: (state: IAuth,
            action: PayloadAction<IAuth>) => {
            try {
                return action.payload
            }
            catch (e: any) {
                console.error(e.message)
                console.log("ERRO : include_chat_message")
            }
        },
        setUser: (state: IAuth = initialState, action: PayloadAction<IAuth>) => {
            try {
                return action.payload
            }
            catch (e: any) {
                console.error(e.message)
                console.log("ERRO : include_chat_message")
            }
        },
        /*register: (state: userState = initialState, action: PayloadAction<userState>) => {
            state.user = action.payload;
        },*/
        logout: (state: IAuth = initialState) => {
            return initialState;
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

export const { setJwt, setUser, logout } = userReducerSlice.actions
export const userReducer = userReducerSlice.reducer;