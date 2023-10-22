
import { useState } from "react";
import {
    size_input_increment_message,
} from "../../../redux/message_input/inputMessageSlice"
import {
    include_chat_message,
} from "../../../redux/chat_messages/MessagesSlice"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"
import {Message} from "../types/types"


export const useInputMessage = () => {
    const [message, setMesage] = useState('')

    let size_input = useAppSelector((state: RootState) => state).input_message_size
    let MessagesArray = useAppSelector((state: RootState) => state.persistedReducer).chat_messages
    console.log('message_redux',MessagesArray)
    let dispatch = useAppDispatch()
    
    function IsValidUsernames(e: React.FormEvent<HTMLInputElement>) {
        let INPUT_SIZE = e.currentTarget.value.length;

        if (INPUT_SIZE > 0) {
            setMesage(e.currentTarget.value)
            console.log("state_msg",e.currentTarget.value)
            dispatch(size_input_increment_message(e.currentTarget.value.length));
        } else {
            dispatch(size_input_increment_message(0));
        }
    }
    const sendMessage = (msg: Message) => {
        //console.log("input", input)
        dispatch(include_chat_message(msg))
      }
    
    

    return {
        IsValidUsernames,
        sendMessage,
        size_input,
        message
    }

}

/*export const useChatMessage = () => {
    const [message, setMesage] = useState('');
    //MESSAGE NOT WORKING
    let message_input:string = '';
    let size_input = useAppSelector((state: RootState) => state).input_message_size
    console.log("input_test",size_input)
    let dispatch = useAppDispatch()
    
    function ReturnMessage(e: React.FormEvent<HTMLInputElement>) :string {
        message_input = e.currentTarget.value
        console.log("message_value",message_input)
        setMesage(message_input)
        return message;
        
    }

    return {
        ReturnMessage,
        message_input,
    }

}*/


