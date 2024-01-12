import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import {Post} from "../../types/types"

interface ModalState {
    post?: any,
    modal_state: boolean
}
const initialState: ModalState = {
    post: null,
    modal_state: false
}

export const modalReducerSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        set_content_modal: (state: ModalState,
            action: PayloadAction<ModalState>) => {
            try {
                return {
                    post:action.payload.post,
                    modal_state:true
                }
            }
            catch (e: any) {
                console.error(e.message)
                console.log("ERRO : set  modal")
            }
        },
        close_modal: (state: ModalState) => {
            try {
                return {
                    post: null,
                    modal_state: false
                }
            }
            catch (e: any) {
                console.error(e.message)
                console.log("ERRO : include_chat_message")
            }
        },
    }
})

export const { set_content_modal, close_modal } = modalReducerSlice.actions
export const postModalReducer = modalReducerSlice.reducer;