import { useState } from "react"
import { Post } from "../../../types/types"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"
import { posts_like, posts_unlike } from "../../../redux/posts_home/posts_home"

import { PostComments } from "../PostComments/PostComments"

export const BottomOptions = ({ post }: Post | any) => {

    let {

        post_id, date, userminilogo,
        createdby, url, likes, comments, bio
    } = post

    let dispatch = useAppDispatch()
    const [saved, setSaved] = useState(false)



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
        <>
            <div className="posts__option">
                <div className='post__like__coment__send'>
                    <div className="svgButton icon__with__padding">
                        <img className="unlike" src="../images/unlike.png" alt="" onClick={(e) => {
                            likePost(e)
                        }} />
                        <img key={post_id} className="display-none like" src="../images/like.png" alt=""
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
            {/*<PostComments post={post}/> */}
        </>
    )
}