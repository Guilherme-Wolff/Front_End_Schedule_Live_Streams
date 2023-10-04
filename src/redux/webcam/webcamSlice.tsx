import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface WebcamRec {
  recorder:boolean;
}

let initialState:WebcamRec = {
  recorder:false
}

export const inputMessage = createSlice({
  name: 'webcam_recorder',
  initialState: initialState,
  reducers: {
    webcam_recorder: (state:WebcamRec,
      action: PayloadAction<WebcamRec>) => {
      try {
          return {
            ...action.payload
          }
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : size_input_increment")
      }
    },
  },

})

export const { 
  webcam_recorder
  
  }  = inputMessage.actions

export const inputMessageSlice = inputMessage.reducer;