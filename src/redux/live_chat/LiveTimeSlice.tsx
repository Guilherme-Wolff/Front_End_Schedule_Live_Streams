import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface TimeState {
    showChat: boolean,
    time: number,
    isPlaying: boolean
}
const initialState: TimeState = {
    showChat: false,
    time: 0,
    isPlaying: false
}

export const liveTimeReducerSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        updateTime: (state: TimeState,
            action: PayloadAction<TimeState>) => {
            try {
                return {
                    time: action.payload.time || 0,
                    isPlaying: action.payload.isPlaying || false,
                    showChat: action.payload.showChat || false
                }
            }
            catch (e: any) {
                console.error(e.message)
               
            }
        },
        isPlaying: (state: TimeState,
            action: PayloadAction<boolean>) => {
            try {
                return {
                    time: state.time,
                    isPlaying: action.payload,
                    showChat: state.showChat
                }
            }
            catch (e: any) {
                console.error(e.message)
                
            }
        },
        showChat: (state: TimeState,
            action: PayloadAction<boolean>) => {
            try {
                return {
                    time: state.time,
                    isPlaying: state.isPlaying,
                    showChat: action.payload
                }
            }
            catch (e: any) {
                console.error(e.message)
                
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

export const { updateTime,isPlaying } = liveTimeReducerSlice.actions
export const liveTimeModalReducer = liveTimeReducerSlice.reducer;