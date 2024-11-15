import '../video_controls.scss'
import "./PostCardHls.scss"
import "../PostModal/PostCardModal.scss"
import './OverlayIframe.scss';
import React, { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import {
  format, render, cancel, register
} from 'timeago.js';

import useSWR from 'swr'
import { Post } from "../../../types/types"
import { posts_like, posts_unlike } from "../../../redux/posts_home/posts_home"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"

import { BottomOptions } from "../BottomOptions/BottomOptions"

import { Iframe } from "./Iframe"
import { OverLayIframe } from "./OverLayIframe"

import { FluidPlayer } from './fluidplayer/FluidPlayer';

//import ReactHlsPlayer, { HlsPlayerProps } from 'react-hls-player';,

import { streamers_path } from "../../../paths"

//import Hls from "hls.js";
import Plyr, { usePlyr, APITypes, PlyrProps, PlyrInstance } from "plyr-react";
import 'plyr/dist/plyr.css';

//import { PlyrPlus } from 'plyrplus'; bliblioteca de terceiros

import { Player } from "./Player"


import {
  set_content_modal,
  close_modal
} from "../../../redux/modal/reducer"


import { ModalState } from "../interfaces"
import { Options } from 'plyr';
import axios from 'axios';
import Hls from 'hls.js';
import { TimeState } from '../../../redux/live_chat/LiveTimeSlice';
import { ChatPlayer } from '../../LiveChat/LiveChat';
//import Hls from 'hls.js';
//import client from './axios';

interface VideoProps {
  urls: string;
}

export const PostCard = ({ post }: Post | any) => {
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
    // Aqui você pode sincronizar com o chat ou fazer outras operações
  };




  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);
  let time: TimeState = useAppSelector((state: RootState) => state.live_time)
  console.log("REGISTRO_TEST modal_post", modal_post)

  let
    {
      id, created_at, avatar,
      streamer, thumbnail, urls, likes,
      /* comments, bio*/
    } = post

  console.log("URL ATUAL", post)

  //const supported = Hls.isSupported();

  let dispatch = useAppDispatch()

  const data: any = ''
  console.log("texto data", data)

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


  }, []);


  {/*<Link to={`/sreamer/${createdby}/${post_id}`} */ }

  return (

    <div key={id} className={modal_post.modal_state ? 'post-modal' : 'post'}
    /*onClick={
 
      !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
        :
        () => null
 
    }*/
    >
      <div className="user which__user__this__post">
        <meta name="referrer" content={"pixeldrain.com/u/" + urls} />

        <div className='which__user__this__post__info'>
          <Link to={`${streamers_path}${streamer}`}>
            <img src={avatar} alt="" />
          </Link>
          <Link to={`${streamers_path}${streamer}`}>
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
      <div key={id} className="posts__image" style={{
        backgroundImage: `url(${thumbnail})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "fit",
      }}
        onClick={

          !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
            :
            () => null /*dispatch(close_modal()) */

        }
      >
        {/*supported ? <HlsPlayer urls={urls} /> : "HLS is not supported in your browser"*/}
        <Player urls={urls} />

        {/*<Chat currentVideoTime={time.time} /> */}


        {/*<FluidPlayer urls={urls} />*/}
      </div>


      {//adicionar depois
        /*<BottomOptions post={post} />*/
      }

    </div >
  )
}