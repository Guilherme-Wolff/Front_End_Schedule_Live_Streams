import {Receiving} from "../types/types"

export const  UserTestReceiving = {
    user_image: "image",
    username: "user Receiving",
    complete_name: "user Receiving",
    storie: false,
    messagelist:[
        {
            own:true,
            id:0,
            avatar:"../../images/users/1.jpg",
            message:"hello"
        },
        {
            own:true,
            id:1,
            avatar:"../../images/users/1.jpg",
            message:"hello2"
        },
        {
            own:false,
            id:2,
            avatar:"../../images/users/1.jpg",
            message:"another user message another user message another user message another user message"
        }
    ]
}

export const fake_messages:Receiving = UserTestReceiving