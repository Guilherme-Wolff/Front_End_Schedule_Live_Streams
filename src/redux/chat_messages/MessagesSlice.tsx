import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Receiving,Message} from "../../Components/Chat/types/types"
import {fake_messages} from "../../Components/Chat/fake_messages/fake_messages"

let state_:Receiving = fake_messages
let messages:Message[] = [...state_.messagelist] 

const LIMIT_LENGHT_MESSAGE :number = 500;

export const ChatMessages = createSlice({
  name: 'chat_messages',
  initialState: messages,
  reducers: {
    include_chat_message: (state:Message[],
      action: PayloadAction<Message>) => {
      try {
          if(action.payload.message.length < LIMIT_LENGHT_MESSAGE){
            return [
              ...state,
              action.payload
            ]
          }
          else{
            return [
              ...state,
            ]
          }
        
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : include_chat_message")
      }
    },

    /*delete_chat_message: (state:Message[],
      action: PayloadAction<Message>) => {
      try {
          return 
            state.push(action.payload)
          
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : size_input_increment")
      }
    },*/
  },

})

export const { 
  include_chat_message,
  //delete_chat_message
  }  = ChatMessages.actions

export const ChatMessageSlice = ChatMessages.reducer;