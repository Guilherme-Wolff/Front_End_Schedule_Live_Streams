
import {Message} from "../types/types"

export const PartnerMessage = ({avatar,message}:Message) => {
    return (
        <div className="partner__message">
            <img src={avatar} alt="" />
            <p>{message}</p>
        </div>
    )
}