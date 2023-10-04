import './login.scss'
import { Link, Navigate, redirect } from 'react-router-dom'
import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";

import UserActionTypes from '../../redux/user/action-types';
import { loginUser } from "../../redux/user/actions"
import { useSelector, useDispatch } from "react-redux"
//import rootReducer from '../../redux/root-reducer';

function App() {
  /*const { currentUser } = useSelector(
  (rootReducer: any) => rootReducer.userReducer)

  console.log("CURRENT_USER_LOGIN ", currentUser);*/
  let dispatch = useDispatch()

  const [usernameValid,
    SetUsernameValid] = useState(false)

  const [passwordValid,
    SetPasswordValid] = useState(false)

  const [usernameValue,
    SetUsernameValue] = useState('')

  const [passwordValue,
    SetPasswordValue] = useState('')

  const [formValid,
    SetFormValid] = useState(false)

  const [redirectHome,
    SetRedirectHome] = useState(false)


  function IsValidPassword(e: React.
    FormEvent<HTMLInputElement>) {
    // if (e.currentTarget.value.length > 6) {
    SetPasswordValid(true)
    SetPasswordValue(e.
      currentTarget.
      value)
    // }
  }

  const LoginUser = (e: FormEvent) => {
    e.preventDefault()
    const postData = {
      type: "user/login",
      payload: {
        username: usernameValue,
        password: passwordValue
      }
    };

    axios.post(`http://localhost:3001/auth/login/`,
      postData)
      .then(res => {
        console.log(res)
        SetRedirectHome(true)
      })
      .catch(err => {
        console.log(postData)
        console.log(err)
      })
      dispatch(postData)
  }

  function IsValidUsername(e:
    React.FormEvent<HTMLInputElement>) {
    if (e.currentTarget.value.length > 1) {
      SetUsernameValid(false)
      SetUsernameValue(e.currentTarget.value)
    }
  }

  useEffect(() => {
    if (usernameValid || passwordValid) {
      SetFormValid(true)
    } else {
      SetFormValid(false)
    }
  }, [passwordValid, usernameValid])


  return (
    <div className='main-login'>
      <div className="registration__system">
        {redirectHome && <Navigate replace to="/" />}
        <div className="registration__system__login">
          <Link to="/">
            <img src="../images/instagramblacklogo.png" alt="" />
          </Link>
          <form onSubmit={(e) => LoginUser(e)}>
            <input
              onChange={
                (e) => {
                  IsValidUsername(e)
                }
              }
              type="text"
              placeholder="name"
            />
            <input type="password" onChange={(e) => IsValidPassword(e)} placeholder="password" />
            <button style={formValid ? { opacity: "1", cursor: "pointer" } : { opacity: ".7" }}
              disabled={!formValid}>Login
            </button>
          </form>
          <div className="registration__system__login__otheror">
            <div className="otheror__line"></div>
            <p>or</p>
            <div className="otheror__line"></div>
          </div>
          <div className="registration__system__login__endpassword">
            <a href="/">Forgot your password?</a>
          </div>
        </div>
        <div className="registration__system__orregister">
          <span>
            Don't have an account yet?
            <a href="/signup"> Register</a>
          </span>
        </div>
      </div>
    </div>
  )
}


export default App