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

//import ReactHlsPlayer, { HlsPlayerProps } from 'react-hls-player';

import Hls from "hls.js";
import Plyr, {usePlyr,APITypes, PlyrProps, PlyrInstance } from "plyr-react";
import 'plyr/dist/plyr.css';

//import { PlyrPlus } from 'plyrplus'; bliblioteca de terceiros


import {
  set_content_modal,
  close_modal
} from "../../../redux/modal/reducer"

import React, { useRef, Suspense } from 'react';
import { ModalState } from "../interfaces"
import { Options } from 'plyr';

interface VideoProps {
  src: string;
}

const HlsPlayer: React.FC<VideoProps> = ({ src })  => {

  console.log("URL M3U8",src)
  const ref = useRef<APITypes>(null);
  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;
      
      //video.crossOrigin = 'use-credentials'
      
      var hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      // @ts-ignore
      ref.current!.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        (ref.current!.plyr as PlyrInstance).play();
      });
    };
    loadVideo();
  },[]);

  return (
    <Plyr
      //className=''
      id="plyr"
      options={{ volume: 0.5 }}
      source={{} as PlyrProps["source"]}
      ref={ref}
      
      //crossOrigin={'use-credentials'}
      
      
    />
  );
};



/*export const CardVideo: React.FC<VideoProps> = ({ src }) => {

  console.log("URL MODAL ", src)

  const playerRef = React.useRef<HTMLVideoElement>(null);

  return (

    <div className='main_video'>
      <ReactHlsPlayer
        hlsConfig={{
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          lowLatencyMode: true,
        }}
        autoPlay={true}
        controls={true}
        width="100%"
        height="auto"
        playerRef={playerRef}
        src={src}
      />
    </div>

  );
};

*/

//////////////////////////
const CardVideoHLS: React.FC<VideoProps> = ({ src }) => {
  console.log("URL M3U8 :",src)
  const ref = useRef<APITypes>(null);
  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;
      var hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      // @ts-ignore
      ref.current!.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        (ref.current!.plyr as PlyrInstance).play();
      });
    };
    loadVideo();
  });

  return (
    <Plyr
    
      id="plyr"
      options={{ volume: 0.1 }}
      source={{} as PlyrProps["source"]}
      ref={ref}
    />
  );
};

export const PostCard = ({ post }: Post | any) => {

  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

  console.log("REGISTRO_TEST modal_post", modal_post)

  let {

    post_id, date, userminilogo,
    createdby, thumbnail, url, likes, comments, bio
  } = post


  const supported = Hls.isSupported();

  
  let dispatch = useAppDispatch()
  //const [saved, setSaved] = useState(false)

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
  useEffect(() => {

  }, [modal_post])
  {/*<Link to={`/sreamer/${createdby}/${post_id}`} */ }

  return (

    <Link to='' key={post_id} className={/*lastPost ? 'last_post' : */'post'}
    /*onClick={

      !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
        :
        () => null

    }*/
    >
      <div className="user which__user__this__post">
        <div className='which__user__this__post__info'>
          <Link to={`/streamer/${createdby}`}>
            <img src={userminilogo} alt="" />
          </Link>
          <Link to={`/streamer/${createdby}`}>
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
      <Link to='' key={post_id} className="posts__image" style={{
        backgroundImage: `url(${thumbnail})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
        onClick={

          !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
            :
            () => null /*dispatch(close_modal()) */

        }
      >
        <div >

          {/* <video className="posts__image" src={url[0]}   /> */}
          {supported ? <HlsPlayer src={url[0]} />  : "HLS is not supported in your browser" }
          

        </div>
      </Link>
      <BottomOptions post={post} />

    </Link>
  )
}

