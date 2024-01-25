import { createSlice, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit"
import { SearchedNames } from "../../types/types"
//import API from "../../api/api"
export const inputSearch = createSlice({
  name: 'input_search',
  initialState: 0,



  reducers: {
    size_input_increment: (state: number,
      action: PayloadAction<number>) => {
      try {
        return action.payload
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : size_input_increment")
      }
    },
    size_input_decrement: (state: number,
      action: PayloadAction<number>) => {
      try {
        return state -= action.payload
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : size_input_increment")

      }
    },
  },

  /*size_input_increment: (state: number,
    action: PayloadAction<number>) => {
    try {
      return action.payload
    }
    catch (e: any) {
 
      console.error(e.message)
      console.log("ERRO : size_input_increment")
    }
  },
  size_input_decrement: (state: number,
    action: PayloadAction<number>) => {
    try {
      return state -= action.payload
    }
    catch (e: any) {
      console.error(e.message)
      console.log("ERRO : size_input_increment")
 
    }
  },
},*/

})

export const { size_input_increment,
  size_input_decrement
}
  = inputSearch.actions

export const inputSearchSlice = inputSearch.reducer;
//export default recentUsersReducer;