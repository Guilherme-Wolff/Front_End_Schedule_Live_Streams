import './video_controls.scss'
import "./PostCard.scss"

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  format, render, cancel, register
} from 'timeago.js';

import { Post } from "../../types/types"
import { posts_like, posts_unlike } from "../../redux/posts_home/posts_home"
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store"

import { BottomOptions } from "./BottomOptions/BottomOptions"

import React, { useRef, Suspense } from 'react';

interface VideoProps {
  src: string[];
}

function delayForDemo(arg0: Promise<any>): Promise<{ default: React.ComponentType<any> }> {
  throw new Error("Function not implemented.")
}


export const Video: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);


  return (
    <div className='main_video'>
      <video
        onContextMenu={(e) => e.preventDefault()}
        className="video_controls post_video"
        controlsList="nodownload"
        ref={videoRef} src={src[0]} controls >
      </video>
    </div>
  );
};


export const CardVideo: React.FC<VideoProps> = ({ src }) => {
  //const videoRef = useRef<HTMLImageElement>(null);


  return (
    <div className='main_video'>
      <img className="thumb" src={src[0]} />
    </div>
  );
};



export const PostCard = ({ post }: Post | any) => {

  let {

    post_id, date, userminilogo,
    createdby, url, likes, comments, bio
  } = post

  let dispatch = useAppDispatch()
  const [saved, setSaved] = useState(false)

  function getIdPost() {
    const post = document.querySelector(".post");
    console.log("postid", post)
  }

  function likePost(e: any) {
    const lickedSvg = "<img className=\"icon__with__padding licked\" src=\"../images/like.png\" alt=\"\"/>"

    const unlickedSvg = "<img className=\"icon__with__padding unlike\" onClick={(e)=> {likePost(e)}} src=\"../images/unlike.png\" alt=\"\"/>"

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


  return (

    <div key={post_id} className={/*lastPost ? 'last_post' : */'post'}
    onClick={()=>{console.log("click post")}}  
    >
      <div className="user which__user__this__post">
        <div className='which__user__this__post__info'>
          <Link to={"/" + createdby}>
            <img src={userminilogo} alt="" />
          </Link>
          <Link to={"/" + createdby}>
            <p>{createdby}</p>
          </Link>
          <div className="point-separate-time-post">•</div>
          <div className="time-post"><p>{format(Date.parse(date), 'en_US')}</p></div>
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
      <div className="posts__image" style={{
        backgroundImage: `url(${url[0]})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
        
        {/* <video className="posts__image" src={url[0]}   /> */}
        {/*< CardVideo src={url} /> */}

      </div>
      <BottomOptions post={post} />

    </div>
  )
}
