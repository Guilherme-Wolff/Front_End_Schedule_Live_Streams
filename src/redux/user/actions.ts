import UserActionTypes from "./action-types";

export const loginUser = (payload:any) => ({
    type: UserActionTypes.LOGIN,
    payload,
})

export const registerUser = (payload:any) => ({
    type: UserActionTypes.REGISTER,
    payload,
})

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT,
})



