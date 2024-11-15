import {
  recent_searches_array,
  recent_searches_remove_user
}
  from "../../redux/recent_users_seach/recentUsersSlice"

import { useAppDispatch } from "../../redux/store"
import { useSelector } from "react-redux"
import { SearchedNames,InputSearchedNames } from "../../types/types"

export default function UserSearches(user: InputSearchedNames): JSX.Element {
  let dispatch = useAppDispatch()

  function GetValuesDivUsers(e: React.MouseEvent<HTMLAnchorElement>) {
    console.log(e.currentTarget?.accessKey)
    //redirect(e.currentTarget?.accessKey)
  }

  function GetValuesDivUsersReturn(e: React.MouseEvent<HTMLAnchorElement>): string {
    return e.currentTarget?.accessKey
    //redirect(e.currentTarget?.accessKey)
  }

  function DeleteUsers(user: string) {
    console.log("DELETANDO:  ", user)
    dispatch(recent_searches_remove_user(user))
  }

  return (
    <>
      <a className="recent__users__wrap" accessKey={user.username} onClick={(e) => GetValuesDivUsers(e)}>
        <div className="recent__user">

          <div className="recent__user__info">
            <img src={user.user_image} alt="" />
            <div>
              <h4>{user.username}</h4>
              <p>{user.platform}</p>
            </div>
          </div>
          <a accessKey={user.username} onClick={(e) => { DeleteUsers(GetValuesDivUsersReturn(e)) }} >
            <svg aria-label="close" className="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="16"
              role="img"
              viewBox="0 0 24 24" width="16">
              <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline>
              <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
            </svg>
          </a>

        </div>
      </a>
    </>
  )
}