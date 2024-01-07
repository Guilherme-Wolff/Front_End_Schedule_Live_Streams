import './register.scss'
import { Link, redirect, Navigate } from 'react-router-dom'

import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../api/api"

import UserActionTypes from '../../redux/user/action-types';
import { registerUser } from "../../redux/user/actions"
import { useSelector, useDispatch } from "react-redux"
import { Logo } from "../../Components/Logo/Logo"
import { LogoSave } from "../../Components/Logo/LogoSave"
//import rootReducer from '../../redux/root-reducer';

import { FailRegisterComponent } from "./FailRegisterComponent"

import { CODE_EMAIL_EXIST, CODE_NAME_EXIST } from "./auth_ccodes"
import { ResponseAuth } from "./interfaces"



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

    const [failRegister, setFailRegister] = useState(false)
    const [codeRegister, setCodeRegister] = useState<number | undefined>(0)



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
        // Lista de caracteres permitidos (ajuste conforme necessário)
        const allowedCharacters = /^[a-zA-Z0-9_]+$/;

        const inputValue = e.currentTarget.value;

        if (inputValue.length > 1 && allowedCharacters.test(inputValue)) {
            SetNameValid(true);
            SetNameValidValue(inputValue);
        } else {
            SetNameValid(false);
            SetNameValidValue(inputValue);
        }
    }

    const RegiterUser = async (): Promise<ResponseAuth> => {
        let response_auth: ResponseAuth = {
            code: 0,
            message: '',
            register: false
        }
        const postDataRegister = {
            type: UserActionTypes.REGISTER,
            payload: {
                username: nameValidValue,
                email: emailValidValue,
                password: passwordValidValue
            }
        };




        const { data } = await axios.post(`${API}/auth/register/`, postDataRegister.payload)
        if (data) {
            console.log("REGISTRO_TEST REGISTRO data",data)
            if (data.register === true) {
                console.log("REGISTRO_TEST REGISTRO TRUE OK")
                //SetredirectLogin(true)
                //SetredirectLogin(false)
                response_auth.register = true;
            } else {
                response_auth.code = data.code;
            }
        }

        /*const { data } = await axios.post(`${API}/auth/register/`, postDataRegister.payload)
            .then(res => {
                const resp = res.data;
                setResponseRegister(resp)
                console.log("REGISTRO_TEST response", resp)
                if (resp.register === true) {
                    console.log("REGISTRO_TEST REGISTRO TRUE OK")
                    //SetredirectLogin(true)
                    //SetredirectLogin(false)
                    response_auth.register = true;
                }

                if (resp.code === CODE_EMAIL_EXIST ||
                    resp.code === CODE_NAME_EXIST) {
                    setFailRegister(true)
                    setCodeRegister(resp.code)
                    console.log("REGISTRO_TEST CODE :", resp.code)
                    //SetredirectLogin(false)
                }
                else{
                    navigate('/login');
                }

            })
            .catch(err => {
                console.log("REGISTRO_TEST erro")
                console.log(err)
            })*/
        console.log(data)
        return response_auth;
    }

    async function RegisteruserSubmit(e: FormEvent) {
        e.preventDefault()
        const { code, register } = await RegiterUser()
        //console.log("REGISTRO_TEST RegisteruserSubmit", register)
        if (register) {
            SetredirectLogin(true)
        }
        else {
        //console.log("REGISTRO_TEST my code",code)
            setFailRegister(true)
            setCodeRegister(code)
        }

    }

    useEffect(() => {
        if (nameValid && passwordValid && emailValid) {
            SetFormValid(true)
        } else {
            SetFormValid(false)
        }
    }, [nameValid, passwordValid, emailValid, redirectLogin])


    return (
        <div className='main-register'>
            <div className="registration__system">
                {redirectLogin && <Navigate replace={true} to="/login" />}
                <div className="registration__system__login">
                    <LogoSave />
                    <p className="signsubtitle">
                        register to save your favorite lives.
                    </p>
                    <form onSubmit={(e) => RegisteruserSubmit(e)}>
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
                        {failRegister && FailRegisterComponent(codeRegister)}
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


