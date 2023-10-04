import {
  recent_searches_array,
  recent_searches_remove_user
}
  from "../../redux/recent_users_seach/recentUsersSlice"

import { useAppDispatch } from "../../redux/store"
import { useSelector } from "react-redux"
import { SearchedNames } from "../../types/types"

export default function UserSearches(user: SearchedNames): JSX.Element {
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
              <p>{user.complete_name}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}