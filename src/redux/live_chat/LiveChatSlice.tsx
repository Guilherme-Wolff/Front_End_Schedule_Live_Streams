import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { fake_chat } from "../../Components/Post/fakehat";

import {Post} from "../../types/types"
import { stringify } from "querystring"

interface ChatMessageProps {
  messageId: string;
  timestamp: string;
  user: {
    username: string;
    userRole: string;
  };
  message: {
    text: string;
    emotes: string[];
    attachments: { type: string; url: string }[];
  };
}


let data_json_init = fake_chat;

interface ModalState {
    post?: Object,
    chat_active: boolean
}
const initialState: ModalState = {
    post: data_json_init,
    chat_active: false
}

export const liveChatReducerSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        addChat: (state: ModalState,
            action: PayloadAction<ModalState>) => {
            try {
                return {
                    post:action.payload.post,
                    chat_active:true
                }
            }
            catch (e: any) {
                console.error(e.message)
                console.log("ERRO : set  modal")
            }
        },
        /*close_modal: (state: ModalState) => {
            try {
                return {
                    post: null,
                    chat_active: false
                }
            }
            catch (e: any) {
                console.error(e.message)
                console.log("ERRO : include_chat_message")
            }
        },*/
    }
})

export const { addChat/*, close_modal*/ } = liveChatReducerSlice.actions
export const liveChatModalReducer = liveChatReducerSlice.reducer;