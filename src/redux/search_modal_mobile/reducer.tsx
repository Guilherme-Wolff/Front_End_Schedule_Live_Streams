import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import {Post} from "../../types/types"

interface SearchModalState {
    size_text:number,
    post?: any,
    modal_state: boolean
}
const initialState: SearchModalState = {
    size_text:0,
    post: null,
    modal_state: false
}

export const searchModalReducerSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        set_content_modal: (state: SearchModalState,
            action: PayloadAction<SearchModalState>) => {
            try {
                return {
                    post:action.payload.post,
                    size_text:action.payload.size_text,
                    modal_state:true
                }
            }
            catch (e: any) {
                console.error(e.message)
                console.log("ERRO : set  modal")
            }
        },
        close_modal: (state: SearchModalState) => {
            try {
                return {
                    post: null,
                    size_text:0,
                    modal_state: false
                }
            }
            catch (e: any) {
                return initialState
                //console.error(e.message)
               // console.log("ERRO : include_chat_message")
            }
        },
    }
})

export const { set_content_modal, close_modal } = searchModalReducerSlice.actions
export const searchModalReducer = searchModalReducerSlice.reducer;