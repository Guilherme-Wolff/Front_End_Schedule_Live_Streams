import { createSlice, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit"
import { Post } from "../../types/types"

let initialState: Post = {
  post_id: 0,
  date: "",
  userminilogo: "",
  createdby: "",
  url: [""],
  likes: 0,
  comments: [
    { "comment_id": 1, "userminilogo": "avatar", "username": "user1", "comment": "comment1" },
    { "comment_id": 2, "userminilogo": "avatar", "username": "user2", "comment": "comment2" },
    { "comment_id": 3, "userminilogo": "avatar", "username": "user3", "comment": "comment3" }
  ],
  bio: ""
};

let listPostsHome: Post[] = []
export const postsHome = createSlice({
  name: 'posts_home',
  initialState: listPostsHome,
  reducers: {
    posts_home_array: (state: Post[],
      action: PayloadAction<Post[]>) => {
      try {
        console.log("TAMANHO_POST",action.payload)
        if (action.payload.length > 0) {
          console.log("LIST", state)
          return [
            ...action.payload,
          ]
        }
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : posts_home_array")
      }

    },
    posts_like: (state: Post[],
      action: PayloadAction<number | undefined>) => {
      try {
        state.map((post:Post)=>{
          if(post.post_id === action.payload ){
             return post.likes++;
          }
         })
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : posts_like")
      }

    },
    posts_unlike: (state: Post[],
      action: PayloadAction<number | undefined>) => {
      try {
        state.map((post:Post)=>{
          if(post.post_id === action.payload ){
             return post.likes--;
          }
         })
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : posts_unlike")
      }

    },
  }
})

export const { posts_home_array,
               posts_like,
               posts_unlike
             }
  = postsHome.actions

export const postsHomeSlice = postsHome.reducer;
//export default recentUsersReducer;