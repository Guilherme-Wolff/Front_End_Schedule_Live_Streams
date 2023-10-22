import './register.scss'
import { Link, redirect, Navigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../api/api"

import UserActionTypes from '../../redux/user/action-types';
import { registerUser } from "../../redux/user/actions"
import { useSelector, useDispatch } from "react-redux"
import { Logo } from "../../Components/Logo/Logo"
//import rootReducer from '../../redux/root-reducer';


interface data_user {
    first_name: string;
    last_name: string;
    nick: string;
    email: string;
    password: string;
}

export const Register = () => {
    //const {currentUser} = useSelector((rootReducer:any)=>rootReducer.userReducer)
    // console.log("CURRENT_USER ",currentUser);
    //let dispatch = useDispatch()

    const [nameValid, SetNameValid] = useState(false)
    const [passwordValid, SetPasswordValid] = useState(false)
    const [redirectLogin, SetredirectLogin] = useState(false)
    const [emailValid, SetEmailValid] = useState(false)

    const [passwordValidValue, SetPasswordValidValue] = useState('')
    const [nameValidValue, SetNameValidValue] = useState('')
    const [emailValidValue, SetEmailValidValue] = useState('')


    const [formValid, SetFormValid] = useState(false)

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

    function IsValidPassword(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 6) {
            SetPasswordValid(true)
            SetPasswordValidValue(e.currentTarget.value)
        } else {
            SetPasswordValid(false)
            SetPasswordValidValue(e.currentTarget.value)
        }
    }

    function IsValidNickName(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetNameValid(true)
            SetNameValidValue(e.currentTarget.value)

        }
        else {
            SetNameValid(false)
            SetNameValidValue(e.currentTarget.value)
        }
    }
    /*function IsValidEmail(evento: React.FormEvent<HTMLInputElement>): boolean {
        const emailValue = evento.currentTarget.value;
        // Expressão regular para validar um endereço de e-mail
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        return emailRegex.test(emailValue);
    }*/



    const RegsiterUser = () => {
        const postData = {
            type: UserActionTypes.REGISTER,
            payload: {
                username: nameValidValue,
                email: emailValidValue,
                password: passwordValidValue
            }
        };

        axios.post(`${API}/auth/register/`, postData.payload)
            .then(res => {
                console.log("RESPOST REGISTRO : ",res.data)
                SetredirectLogin(true)
            })
            .catch(err => {
                //console.log("DATA_POST",postData)
                console.log(err)
                redirect("/login")
            })
        //dispatch(postData)
    }

    async function Registeruser(e: React.FormEvent) {
        e.preventDefault()
        RegsiterUser()
        redirect("/login")
    }

    useEffect(() => {
        if (nameValid && passwordValid && emailValid) {
            SetFormValid(true)
        } else {
            SetFormValid(false)
        }
    }, [nameValid,passwordValid, emailValid,redirectLogin])


    return (
        <div className='main-register'>
            <div className="registration__system">
                {redirectLogin && <Navigate replace to="/login" />}
                <div className="registration__system__login">
                    <Logo />
                    <p className="signsubtitle">
                        register to save your favorite lives.
                    </p>
                    <form onSubmit={(e) => Registeruser(e)}>
                        <input
                            type="text"
                            className="w258"
                            onChange={(e) => IsValidNickName(e)}
                            placeholder="nick"
                        />
                        <input
                            className="w258"
                            onChange={(e) => IsValidEmail(e)}
                            type="text"
                            placeholder="e-mail"
                        />
                        <input
                            type="password"
                            className="w258"
                            onChange={(e) => IsValidPassword(e)}
                            placeholder="password"
                        />
                        <p className="registration__human">
                            <a href="/">Terms</a>,
                            <a href="/" color='000'>Privacy Policy</a>
                        </p>
                        <button
                            className="w258"
                            style={formValid ? { opacity: "1", cursor: "pointer" } : { opacity: ".7" }}
                            disabled={!formValid}
                        >
                            Registration
                        </button>
                    </form>
                </div>
                <div className="registration__system__orregister">
                    <span>
                        Have an account? <a href="/login">login</a>
                    </span>
                </div>
            </div>
        </div>
    )
}


