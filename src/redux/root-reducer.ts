
import { combineReducers } from "redux";
import {recentUsersSlice} from "./recent_users_seach/recentUsersSlice"
import {inputSearchSlice} from "./input_redux/inputSearchSlice"
import {postsHomeSlice} from "./posts_home/posts_home"
import {inputMessageSlice} from "./message_input/inputMessageSlice"
import {ChatMessageSlice} from "./chat_messages/MessagesSlice" 
export const rootReducer = combineReducers({
  recent:recentUsersSlice,
  input_size:inputSearchSlice,
  posts_home:postsHomeSlice,
  chat_messages:ChatMessageSlice
  })

//export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer