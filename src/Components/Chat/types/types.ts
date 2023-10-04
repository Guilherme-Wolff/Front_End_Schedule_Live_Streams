export interface Message {
    own:boolean;
    avatar?:string
    id: number;
    message:string;

}
export interface OwnMessage {
    id: number;
    message:string;

}

export interface Receiving  {
    user_image: string;
    username: string;
    complete_name: string;
    storie?: boolean;
    messagelist:Message[]
}

export interface Sender {
    user_image: string;
    username: string;
    complete_name: string;
    storie?: boolean;
    messagelist:Message[]
}

export interface UserMessage {
    own:boolean;
    avatar?:string;
    message:string;
 }