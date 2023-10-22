import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export const inputMessage = createSlice({
  name: 'input_message',
  initialState: 0,
  reducers: {
    size_input_increment_message: (state:number,
      action: PayloadAction<number>) => {
      try {
          return action.payload
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : size_input_increment")
      }
    },
  },

})

export const { 
  size_input_increment_message
  
  }  = inputMessage.actions

export const inputMessageSlice = inputMessage.reducer;