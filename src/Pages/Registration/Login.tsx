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

import { FailRegisterComponent } from "./FailRegisterComponent"

import { INCORRET_LOGIN } from "./auth_ccodes"

import { ResponseAuthLogin } from "./interfaces"
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
  const [failRegister, setFailRegister] = useState(false)
  const [codeRegister, setCodeRegister] = useState<number | undefined>(0)

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

  const LoginUser = async (): Promise<ResponseAuthLogin> => {
    let response_auth: ResponseAuthLogin = {
      code: 0,
      message: '',
      register: false,
      data: null,
    }

    let User = {
      user: {
        name: '',
        tokenJWT: 'token'
      }

    }
    // e.preventDefault()
    const postData = {
      payload: {
        email: emailValidValue,
        password: passwordValidValue
      }
    };

    const { data } = await axios.post(`${API}/auth/login/`, postData.payload)
    if (data) {
      console.log("REGISTRO_TEST data login", data)
      if (data.register === true) {
        response_auth.register = true
        response_auth.data = data;
      }
      else {
        response_auth.register = false;
        response_auth.code = INCORRET_LOGIN;
        //response_auth.data = null
      }
    }
    /*axios.post(`${API}/auth/login/`,
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
      })*/

    return await response_auth;
  }

  const LoginUserSubmit = async (e: FormEvent) => {
    e.preventDefault()

    let User = {
      user: {
        name: '',
        tokenJWT: 'token'
      }

    }


    const { register, code, data } = await LoginUser()

    console.log("REGISTRO_TEST LoginUser", code, register, data)

    if (register) {
      console.log("REGISTRO_TEST login concluido")
      User.user.name = data.name
      User.user.tokenJWT = data.tokenJwt
      dispatch(setUser(User))
      SetRedirectHome(true)
    }
    else {
      //console.log("REGISTRO_TEST login error : ","GEGISTER FAIL:",failRegister," CODE:",code)
      setFailRegister(true)
      setCodeRegister(code)
      console.log("REGISTRO_TEST login error : ","GEGISTER FAIL:",failRegister," CODE:",code)
      
    }
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
          <form onSubmit={(e) => LoginUserSubmit(e)}>
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

            {failRegister && FailRegisterComponent(codeRegister)}

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
