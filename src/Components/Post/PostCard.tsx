import './video_controls.scss'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    format, render, cancel, register
  } from 'timeago.js';

import {Post} from "../../types/types"
import { posts_like,posts_unlike } from "../../redux/posts_home/posts_home"
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store"

import React, {  useRef ,Suspense} from 'react';

interface VideoProps {
  src: string[];
}

export const Video: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div >
      <video className="posts__image" ref={videoRef} src={src[0]} controls />
      <button onClick={handleTogglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};




export const PostCard = ({post}:Post | any) => {
    
      let {
  
        post_id,date,userminilogo,
        createdby,url,likes,comments,bio
        } = post

    let dispatch = useAppDispatch()
    const [saved, setSaved] = useState(false)

    function getIdPost() {
      const post = document.querySelector(".post");
      console.log("postid",post)
    }

    function likePost(e: any) {
        const lickedSvg = "<img className=\"icon__with__padding licked\" src=\"../images/like.png\" alt=\"\"/>"
    
        const unlickedSvg = "<img className=\"icon__with__padding unlike\" onClick={(e)=> {likePost(e)}} src=\"../images/unlike.png\" alt=\"\"/>"
        
        let currentLike = e.target
        console.log(typeof e.target)
        console.log("key",e.target.key)
        
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
        <div key={post_id} className={/*lastPost ? 'last_post' : */'post'}>
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
                  //backgroundImage: `url(${posts.url})`,
                  //width: "90%",
                  //height: "590px",
                  //backgroundPosition: "center",
                  //backgroundSize: "cover",
                }}>
                 {/* <video className="posts__image" src={url[0]}   /> */}
                  < Video  src={url}/>
                  
                </div>
                <div className="posts__option">
                  <div className='post__like__coment__send'>
                    <div className="svgButton icon__with__padding">
                      <img className="unlike" src="../images/unlike.png" alt="" onClick={(e) => {
                        likePost(e)
                      }} />
                      <img key={post_id}className="display-none like" src="../images/like.png" alt=""
                        onClick={(e) => {
                          likePost(e)
                        }} />
                    </div>
                    <div className='icon__with__padding'>
                      <svg aria-label="comment" color="#fafafa" fill="#fafafa" height="24"
                        role="img" viewBox="0 0 24 24" width="24">
                        <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none"
                          stroke="currentColor" strokeLinejoin="round"
                          strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className='icon__with__padding'>
                      <svg aria-label="Share post" color="#fafafa" fill="#fafafa"
                        height="24" role="img" viewBox="0 0 24 24" width="24">
                        <line fill="none" stroke="currentColor" strokeLinejoin="round"
                          strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                        <polygon fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor" strokeLinejoin="round"
                          strokeWidth="2"></polygon>
                      </svg>
                    </div>
                  </div>
                  <div className='icon__with__padding post__save' onClick={() => setSaved(!saved)}>
                    {saved ?
                      <svg aria-label="Delete" className="_ab6-" color="#fafafa" fill="#fafafa"
                        height="24" role="img" viewBox="0 0 24 24" width="24">
                        <path
                          d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
                      </svg> :
                      <svg aria-label="Save" color="#fff" fill="#fff" height="24" role="img"
                        viewBox="0 0 24 24" width="24">
                        <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                          stroke="currentColor" strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"></polygon>
                      </svg>}
                  </div>
                </div>
                <div className="posts__info">
                  <p className='howmany__licked__this__post'>
                    <span>{likes}</span> Likes</p>
                  <p><span>{createdby}</span> {bio}</p>
                  <a href="#">View all comments ({comments.length})</a>
                  {/*<p className='date__of__publicated'>5 days ago</p>*/}
                </div>
                <div className="reply__coment">
                  <div className="icon__with__padding">
                    <svg aria-label="emoji" color="#fafafa" fill="#fafafa" height="24" role="img"
                      viewBox="0 0 24 24" width="24">
                      <path
                        d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                    </svg>
                  </div>
                  {/*ESTILISAR O INPUT E GERAR FUNÇOES*/}
                  <input className="input_comments_style" id="input_comments" type="text" placeholder='Add a comment...' />
                  <button>Publish</button>
                </div>
              </div>
    )
}
