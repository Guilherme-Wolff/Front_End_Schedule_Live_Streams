import './login.scss'
import { Link, Navigate, redirect } from 'react-router-dom'
import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../api/api"
import UserActionTypes from '../../redux/user/action-types';
import { userReducer, setJwt, setUser } from "../../redux/user/reducer"
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store"
import { Logo } from "../../Components/Logo/Logo"
import { LogoSave } from "../../Components/Logo/LogoSave"
//import rootReducer from '../../redux/root-reducer';

//let size_input = useAppSelector((state: RootState) => state).input_message_size
//let MessagesArray = useAppSelector((state: RootState) => state.persistedReducer).chat_messages

export const Login = () => {
  /*const { currentUser } = useSelector(
  (rootReducer: any) => rootReducer.userReducer)

  console.log("CURRENT_USER_LOGIN ", currentUser);*/
  let dispatch = useAppDispatch()

  /*let user = useAppSelector((state: RootState) => state.persistedReducer).user.user
  console.log("USER AUTHCONTEXT",user)*/


  const [passwordValid,
    SetPasswordValid] = useState(false)

  const [passwordValidValue,
    SetPasswordValue] = useState('')

  const [formValid,
    SetFormValid] = useState(false)

  const [redirectHome,
    SetRedirectHome] = useState(false)

  const [emailValid,
    SetEmailValid] = useState(false)
  const [emailValidValue,
    SetEmailValidValue] = useState('')


  function IsValidPassword(e: React.
    FormEvent<HTMLInputElement>) {
    if (e.currentTarget.value.length > 6) {
      SetPasswordValid(true)
      SetPasswordValue(e.
        currentTarget.
        value)
    }
  }

  function IsValidEmail(e: React.FormEvent<HTMLInputElement>) {

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (emailRegex.test(e.currentTarget.value)) {
      SetEmailValid(true)
      SetEmailValidValue(e.currentTarget.value)
    }
    else {
      SetEmailValid(false)
      SetEmailValidValue(e.currentTarget.value)
    }
  }

  const LoginUser = (e: FormEvent) => {
    let User = {
      user: {
        name: '',
        tokenJWT: 'token'
      }

    }
    e.preventDefault()
    const postData = {
      payload: {
        email: emailValidValue,
        password: passwordValidValue
      }
    };

    axios.post(`${API}/auth/login/`,
      postData.payload)
      .then(res => {
        console.log("LOGIN RESPONSE : ", res.data)
        User.user.name = res.data.name
        User.user.tokenJWT = res.data.tokenJwt
        dispatch(setUser(User))
        SetRedirectHome(true)
      })
      .catch(err => {
        console.log(postData)
        console.log(err)
      })

  }

  useEffect(() => {
    if (emailValid && passwordValid) {
      SetFormValid(true)
    } else {
      SetFormValid(false)
    }
  }, [emailValid, passwordValid, redirectHome])


  return (
    <div className='main-login'>
      <div className="registration__system">
        {redirectHome && <Navigate replace to="/" />}
        <div className="registration__system__login">
          <LogoSave />
          <form onSubmit={(e) => LoginUser(e)}>
            <input
              onChange={
                (e) => {
                  IsValidEmail(e)
                }
              }
              type="text"
              placeholder="e-mail"
            />
            <input type="password" onChange={(e) => IsValidPassword(e)} placeholder="password" />
            <button style={formValid ? { opacity: "1", cursor: "pointer" } : { opacity: ".7" }}
              disabled={!formValid}>Login
            </button>
          </form>
          {/*
          <div className="registration__system__login__otheror">
            <div className="otheror__line"></div>
            <p>or</p>
            <div className="otheror__line"></div>
          </div>
          <div className="registration__system__login__endpassword">
            <a href="/">Forgot your password?</a>
          </div>
           */}
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
