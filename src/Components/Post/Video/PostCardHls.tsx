import '../video_controls.scss'
import "./PostCard.scss"
import "../PostModal/PostCardModal.scss"
import React, { useEffect, useState, useRef, Suspense } from 'react';
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

//import ReactHlsPlayer, { HlsPlayerProps } from 'react-hls-player';

import Hls from "hls.js";
import Plyr, { usePlyr, APITypes, PlyrProps, PlyrInstance } from "plyr-react";
import 'plyr/dist/plyr.css';

//import { PlyrPlus } from 'plyrplus'; bliblioteca de terceiros


import {
  set_content_modal,
  close_modal
} from "../../../redux/modal/reducer"


import { ModalState } from "../interfaces"
import { Options } from 'plyr';
import axios from 'axios';
//import client from './axios';

interface VideoProps {
  src: string;
}


const HlsPlayer: React.FC<VideoProps> = ({ src }) => {

  console.log("URL M3U8", src)
  const ref = useRef<APITypes>(null);

  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;


      //video.crossOrigin = 'use-credentials'
      const config = {
        xhrSetup: function (xhr: any, url: any) {
          // Adicione aqui os cookies necessários à solicitação
          //xhr.withCredentials = true; // Isso permite que o navegador envie cookies
          xhr.setRequestHeader('Cookie', 'pd_auth_key=fd07e276-f93c-4980-961d-0b8a125a5f95');

          //xhr.setRequestHeader('Token', '8smWG8uhfjFhEVrwn7bZ3Oa6TFenghAO7vtv7VsU3V2CSwTr1FckqvRbLAH7aDjd');
        }
      };


      if (src.includes('m3u8')) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          (ref.current!.plyr as PlyrInstance).play();
        });
      } else if (src.includes('mp4')) { // Caso contrário, carrega um arquivo MP4
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          video.play();
        });
      }

    };
    loadVideo();
  }, []);


  return (
    <Plyr
      //className=''

      //crossOrigin="use-credentials"
      id="plyr"
      options={{ volume: 0.5 }}
      source={{} as PlyrProps["source"]}
      ref={ref}

    //crossOrigin={'use-credentials'}


    />
  );
};

//////////////////////////


export const PostCard = ({ post }: Post | any) => {

  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);
  console.log("REGISTRO_TEST modal_post", modal_post)

  let {

    post_id, date, userminilogo,
    createdby, thumbnail, url, likes, comments, bio
  } = post

  const supported = Hls.isSupported();

  let dispatch = useAppDispatch()

  function safeBase64Encode(str: string): string {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      (match, p1) => String.fromCharCode(parseInt(p1, 16))));
  }


  const _headers = new Headers({
    'Cookie': 'accountToken=fYvmAjtGzKyXnYlZj30gJSpf7zHvofig',
    'Referer': 'https://gofile.io/d/080d7e47-4630-4a5e-9f47-79cbaf04ea84',
    //'Referrer-Policy': 'strict-origin-when-cross-origin',
    //'method': 'GET',
    //"Authorization": "Basic " + safeBase64Encode(":" + '0ba10ff8-485b-447f-a77e-955a14d42a22'),
    Accept: '*/*',
    //'Accept-Encoding': 'identity;q=1, *;q=0',
    //Accept-Language: 'en-US',
    Origin: 'https://gofile.io',
    //Cookie: 'pd_auth_key=25f321d9-8dc2-4dc8-8568-cab33b7d7fa5',
    //'If-Range': 'Mon, 01 Apr 2024 16:50:31 GMT',
    //'Range': 'bytes=720896-54099967',

    //'Host': 'https://pixeldrain.com/',
    //'Sec-Ch-Ua': '"Not A(Brand";v="99", "Opera GX";v="107", "Chromium";v="121"',
    //'Sec-Ch-Ua-Mobile': '?0',
    //'Sec-Ch-Ua-Platform': '"Android"',
    //'Sec-Fetch-Dest': 'video',
    //'Sec-Fetch-Mode': 'cors',
    //'Sec-Fetch-Site':'cross-site',
    //'Sec-Fetch-Site': 'same-origin',

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.95 Safari/537.36'
  })

  const data: any = ''
  //const { data, error, isLoading } = useSWR('https://pixeldrain.com/api/file/tSktFd3X', fetcher)
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


  }, [modal_post]);


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
          { <Iframe src={url} />}
          {/*supported ? <HlsPlayer src="http://127.0.0.1:8080/playlistbunkrr.m3u8" /> : "HLS is not supported in your browser"*/}
          {/*< App /> */}


        </div>
      </Link>
      {<BottomOptions post={post} /> }

    </Link >
  )
}