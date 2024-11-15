import '../video_controls.scss'
import "./PostCard.scss"
import "../PostModal/PostCardModal.scss"

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  format, render, cancel, register
} from 'timeago.js';

import { Post } from "../../../types/types"
import { posts_like, posts_unlike } from "../../../redux/posts_home/posts_home"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"

import { BottomOptions } from "../BottomOptions/BottomOptions"

import {
  set_content_modal,
  close_modal
} from "../../../redux/modal/reducer"

import React, { useRef, Suspense } from 'react';
import { ModalState } from "../interfaces"
import { streamers_path } from '../../../paths';

interface VideoProps {
  src: string[];
}

export const CardVideo: React.FC<VideoProps> = ({ src: pixeldrain_id }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);


  return (
    <div className='main_video'>
      <video
        onContextMenu={(e) => e.preventDefault()}
        className="video_controls post_video"
        controlsList="nodownload"
        ref={videoRef} src={`https://pd.cybar.xyz/${pixeldrain_id}?download`} controls >
      </video>
    </div>
  );
};

// ================================================================================================

// ================================================================================================

/* // POST STRUCTURE
    id: 'ee19d0cb-ff97-4425-8b58-e2835dc8c541',
    streamer_id: '164cc8e3-38a6-4990-9a15-404caa7b596a',
    streamer: 'geovanadopark',
    thumbnail: null,
    platform: 'tiktok',
    tags: null,
    urls: 'rAdnR1s8',
    views: 0,
    chat: null,
    likedUserIds: null,
    created_at: 2024-08-17T22:02:08.903Z,
    likes: 0
*/



export const PostCard = ({ post }: Post | any) => {
  const BASE_PIXELDRAIN_URL = "https://pixeldrain.com/api/file/"

  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

  console.log("INFO-TEST", post)

  let {
    //pregar avatar separado que é o userminilogo
    id, created_at, avatar,
    streamer, thumbnail,
    urls, likes,
    /*comments,*/ /*bio*/
  } = post;

  let dispatch = useAppDispatch()

  const [saved, setSaved] = useState(false)

  function getIdPost() {
    const post = document.querySelector(".post");
    console.log("postid", post)
  }

  function likePost(e: any) {
    const lickedSvg = "<img className=\"icon__with__padding licked\" src=\"/images/like.png\" alt=\"\"/>"

    const unlickedSvg = "<img className=\"icon__with__padding unlike\" onClick={(e)=> {likePost(e)}} src=\"/images/unlike.png\" alt=\"\"/>"

    let currentLike = e.target
    console.log(typeof e.target)
    console.log("key", e.target.key)

    // currentLike.remove()

    let parentElement = e.target.parentElement

    let like = parentElement.
      querySelector('.unlike')

    let unlicked = parentElement.
      querySelector('.like')

    if (currentLike.className == 'unlike') {
      dispatch(posts_like(id));
      like.classList.add('display-none')
      unlicked.classList.remove('display-none')
    } else if (currentLike.className == 'like') {
      dispatch(posts_unlike(id));
      like.classList.remove('display-none')
      unlicked.classList.add('display-none')
    }


  }
  useEffect(() => {

  }, [modal_post])
  {/*<Link to={`/sreamer/${createdby}/${post_id}`} */ }

  return (

    <Link to='' key={id} className={/*lastPost ? 'last_post' : */'post'}
    /*onClick={

      !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
        :
        () => null

    }*/
    >
      <div className="user which__user__this__post">
        <div className='which__user__this__post__info'>
          <Link to={`${streamers_path}tiktok/${streamer}`}>
            <img src={avatar} alt="" />
          </Link>
          <Link to={`${streamers_path}tiktok/${streamer}`}>
            <p>{streamer}</p>
          </Link>
          <div className="point-separate-time-post">•</div>
          <div className="time-post"><p>{format(Date.parse(created_at), 'en_US')}</p></div>
        </div>


        <div className="icon__with__padding">
          <svg aria-label="Additionally" color="#fafafa" fill="#fafafa" height="24"
            role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </div>
      </div>
      <Link to='' key={id} className="posts__image" style={{
        backgroundImage: `url(${thumbnail})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "contain",
        //backgroundSize: "ccover",
        //backgroundRepeat: "no-repeat",
      }}
        onClick={

          !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
            :
            () => null /*dispatch(close_modal()) */

        }
      >
        <div >

          {/* <video className="posts__image" src={url[0]}   /> */}
          {/*< CardVideo src={url} /> */}

        </div>
      </Link>
      <BottomOptions post={post} />

    </Link>
  )
}
//
export const PostCardVideo = ({ post }: Post | any) => {

  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

  console.log("REGISTRO_TEST modal_post", modal_post)

  let {

    post_id, created_at, userminilogo,
    streamer, thumbnail, urls, likes, comments, bio
  } = post

  let dispatch = useAppDispatch()
  const [saved, setSaved] = useState(false)

  function getIdPost() {
    const post = document.querySelector(".post");
    console.log("postid", post)
  }

  function likePost(e: any) {
    const lickedSvg = "<img className=\"icon__with__padding licked\" src=\"/images/like.png\" alt=\"\"/>"

    const unlickedSvg = "<img className=\"icon__with__padding unlike\" onClick={(e)=> {likePost(e)}} src=\"/images/unlike.png\" alt=\"\"/>"

    let currentLike = e.target
    console.log(typeof e.target)
    console.log("key", e.target.key)

    // currentLike.remove()

    let parentElement = e.target.parentElement


    let like = parentElement.
      querySelector('.unlike')

    let unlicked = parentElement.
      querySelector('.like')

    if (currentLike.className == 'unlike') {
      dispatch(posts_like(post_id));
      like.classList.add('display-none')
      unlicked.classList.remove('display-none')
    } else if (currentLike.className == 'like') {
      dispatch(posts_unlike(post_id));
      like.classList.remove('display-none')
      unlicked.classList.add('display-none')
    }


  }
  useEffect(() => {

  }, [modal_post])
  {/*<Link to={`/sreamer/${createdby}/${post_id}`} */ }

  return (

    <Link to='' key={post_id} className={'post'}
    /*onClick={

      !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
        :
        () => null

    }*/
    >
      <div className="user which__user__this__post">
        <div className='which__user__this__post__info'>
          <Link to={`/streamer/${streamer}`}>
            <img src={userminilogo} alt="" />
          </Link>
          <Link to={`/streamer/${streamer}`}>
            <p>{streamer}</p>
          </Link>
          <div className="point-separate-time-post">•</div>
          <div className="time-post"><p>{format(Date.parse(created_at), 'en_US')}</p></div>
        </div>


        <div className="icon__with__padding">
          <svg aria-label="Additionally" color="#fafafa" fill="#fafafa" height="24"
            role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </div>
      </div>
      <div key={post_id} className="posts__image" >


        {/* <video className="posts__image" src={url[0]}   /> */}
        < CardVideo src={urls} />


      </div>
      <BottomOptions post={post} />

    </Link>
  )
}
