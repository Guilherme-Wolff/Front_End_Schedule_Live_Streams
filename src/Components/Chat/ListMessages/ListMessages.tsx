

import { Message } from "../types/types"
import { fake_messages } from "../fake_messages/fake_messages"
import { MessageCard } from "../Message/MessageCard"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"
import { ObjectInArrayOfObject } from "../../../utils/functions"

let messages: Message[] = fake_messages.messagelist;

export const ListMessages = () => {
    let MessagesArray = useAppSelector((state: RootState) => state.persistedReducer).chat_messages
    let msgs = ObjectInArrayOfObject(MessagesArray)
    return (
        <div className="own__chat">

            {msgs.reverse().map((msg: Message) => {
                return (
                    MessageCard(msg)
                )
            })}
        </div>
    )
}