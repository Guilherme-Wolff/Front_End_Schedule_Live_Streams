import "./Posts.scss"
import React, {
  lazy,
  ReactElement, useEffect,
  useState, useRef, Suspense
} from 'react'
import { apiSlice } from '../../redux/api/apiSlice'
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store"

import { ModalState } from "./interfaces"
import {
  set_content_modal,
  close_modal
} from "../../redux/modal/reducer"

import { posts_home_array } from "../../redux/posts_home/posts_home"
import { ObjectInArrayOfObject, ObjectIsEmpty } from "../../utils/functions"
import { Post } from "../../types/types"
import { PostCard } from "./Video/PostCard"


import { fake_posts } from "./fake_posts"
import IsLoading from "../IsLoadin/IsLoading"


import { SuspensePost } from "./SuspensePost"
import { useParams } from 'react-router-dom';
//const PostCardDelay = lazy(() => delayForDemo(import('./PostCard')));

function delayForDemo(promise: any) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}


//const PostCardDelay = lazy(() => delayForDemo(import('./PostCard')));
//const PostCardDelay = lazy(() => delayForDemo(import('./PostCard')));


export default function Posts() {

  const [lives, setLives] = useState<any[]>([])

  const [streamerBaseInfo, setStreamerBaseInfo] = useState({ streamer_name: '', platform: '' })

  const { streamer_name, platform } = useParams();

  let dispatch = useAppDispatch()
  //mudar para lives do streamer especifico
  let streamer_lives: Post[] = useAppSelector((state: RootState) => state.persistedReducer).posts_home;

  //let modal_post: ModalState = useAppSelector((state: RootState) => state.persistedReducer).post_modal;


  setStreamerBaseInfo({ streamer_name: streamer_name as string, platform: platform as string })
  //const home_empty: boolean = ObjectIsEmpty(streamer_lives);
  streamer_lives = ObjectInArrayOfObject(streamer_lives)
  //const getPostsFeedHome = apiSlice.endpoints.getPostsFeedHome.useQuery
  //const { data, isLoading } = getPostsFeedHome("/postshome")
  let isLoading = false
  /*let data: any[] = []
  let posts: Post[] = data
  console.log("TYTY", posts)
  console.log("DATAH", data)*/

  const queryOptions = {
    enabled: true,
  };


  

  //const { data } = useGetStreamerLivesQuery('')

  //console.log("POST STREAMER", data)
  //let notReload:boolean = true;


  return (
    <>
      <div className='main'>
        <div className="main-post">
          <div className={`${isLoading ? 'posts_is_loading' : 'posts'}`}>
            {
              /*posts_home.length ? posts_home?.map((post: Post,index:number) => (
                posts_home.length === index ?
                 <PostCard post={post} lastPost={true}/> : 
                 <PostCard post={post}/>
                
              ),console.log("posts_home")):*/


              fake_posts.length ? fake_posts.map((post: Post) => (

                <PostCard post={post} />

              )) : <div>ERRO</div>
              //FALANHADO LOOP
              /*posts_home?.map((post: Post) => (
                PostCard(post)
              ))*/
            }
          </div>
        </div>
      </div>
    </>
  )
}

