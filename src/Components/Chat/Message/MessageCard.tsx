import {OwnMessage} from "../OwnMessage/OwnMessage"
import {PartnerMessage} from "../PartnerMessage/PartnerMessage"
import {Message} from "../types/types"

export const MessageCard = (msg:Message) => {
    if(msg.own === true){
        return (
            OwnMessage(msg.message)
        )
    }
    if(msg.own === false){
        return (
            PartnerMessage(msg)
        )
    }
}