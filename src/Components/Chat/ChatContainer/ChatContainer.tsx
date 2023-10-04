import { Link } from "react-router-dom"
import { Receiving } from "../types/types"
import {InputMessages} from "../InputMessages/InputMessages"
import {ListMessages} from "../ListMessages/ListMessages"
import {IconVideoCall} from "../Icons/IconVideoCall"
import {IconVoiceCall} from "../Icons/IconVoiceCall"
import {IconInfo} from "../Icons/IconInfo"

export const ChatContainer = (
    {
        user_image,
        username,
        complete_name,
        messagelist
       
    }:Receiving) => {
    return (
        <div className="chat__messages">
            <div className='chat__navbar'>
                <Link to="/username">
                    <div className="chat__navbar__profile">
                        <img src="../images/users/1.jpg" alt="" />
                        <h4 style={{ color: '#fff' }}>{complete_name}</h4>
                    </div>
                </Link>
                <div className="chat__navbar__options">
                    <IconVoiceCall />
                    <IconVideoCall />
                    <IconInfo />
                </div>
            </div>
            <ListMessages />
            <InputMessages />
        </div>
    )
}