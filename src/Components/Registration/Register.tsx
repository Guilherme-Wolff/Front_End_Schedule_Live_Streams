import './register.scss'
import {Link, redirect, Navigate} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import axios from "axios";

import UserActionTypes from '../../redux/user/action-types';
import {registerUser} from "../../redux/user/actions"
import {useSelector,useDispatch} from "react-redux"
//import rootReducer from '../../redux/root-reducer';


interface data_user {
    first_name:string;
    last_name:string;
    nick:string;
    email:string;
    password:string;
}

function App() {
    //const {currentUser} = useSelector((rootReducer:any)=>rootReducer.userReducer)
   // console.log("CURRENT_USER ",currentUser);
    //let dispatch = useDispatch()
    
    const [usernameValid, SetUsernameValid] = useState(false)
    const [userSurNameValid, SetUserSurNameValid] = useState(false)
    const [passwordValid, SetPasswordValid] = useState(false)
    const [nameValid, SetNameValid] = useState(false)
    const [phoneValid, SetPhoneValid] = useState(false)
    const [redirectLogin, SetredirectLogin] = useState(false)
    const [emailValid, SetEmailValid] = useState(false)


    const [usernameValidValue, SetUsernameValidValue] = useState('')
    const [userSurNameValidValue, SetUserSurNameValidValue] = useState('')
    const [passwordValidValue, SetPasswordValidValue] = useState('')
    const [nameValidValue, SetNameValidValue] = useState('')
    const [phoneValidValue, SetPhoneValidValue] = useState('')
    const [emailValidValue, SetEmailValidValue] = useState('')


    const [formValid, SetFormValid] = useState(false)

   /* var re = /@/gi;
    function IsValidEmail(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.search(re)) {
            SetEmailValid(true)
            SetEmailValidValue(e.currentTarget.value)
        }
    }*/



    function IsValidPassword(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 6) {
            SetPasswordValid(true)
            SetPasswordValidValue(e.currentTarget.value)
        }
    }

    function IsValidUsername(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetUsernameValid(false)
            SetUsernameValidValue(e.currentTarget.value)
        }
    }

    function IsValidName(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetNameValid(false)
            SetNameValidValue(e.currentTarget.value)
        }
    }

    function IsValidSurName(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetUserSurNameValid(false)
            SetUserSurNameValidValue(e.currentTarget.value)

        }
    }

    function IsValidPhone(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1) {
            SetPhoneValid(false)
            SetPhoneValidValue(e.currentTarget.value)

        }
    }


    const RegsiterUser = () => {
        const postData = {
            type:UserActionTypes.REGISTER,
            payload:{
            username: usernameValidValue,
            name: userSurNameValidValue,
            surname: passwordValidValue,
            email: nameValidValue,
            password: phoneValidValue
            }
        };
        
        axios.post(`http://127.0.0.1:8000/api/register/`, postData)
            .then(res => {
                console.log(res)
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
        if (usernameValid || passwordValid || phoneValid || nameValid || userSurNameValid) {
            SetFormValid(true)
        } else {
            SetFormValid(false)
        }
    }, [passwordValid, usernameValid, nameValid, userSurNameValid, phoneValid])


    return (
    <div className='main-register'>
        <div className="registration__system">
            {redirectLogin && <Navigate replace to="/login"/>}
            <div className="registration__system__login">
                <Link to="/">
                    <img src="../images/instagramblacklogo.png" alt=""/>
                </Link>
                <p className="signsubtitle">
                    Register to view photos and videos of your friends.
                </p>
                <form onSubmit={(e) => Registeruser(e)}>
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidUsername(e)}
                        placeholder="first name"
                    />
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidName(e)}
                        placeholder="last name"
                    />
                    <input
                        type="text"
                        className="w258"
                        onChange={(e) => IsValidSurName(e)}
                        placeholder="nick"
                    />
                    <input
                        className="w258"
                        onChange={(e) => IsValidPhone(e)}
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
                        People who use our service may have uploaded your contact information to Instagram.
                        <a href="/">More</a>
                    </p>
                    <p className="registration__human">
                        By registering, you accept our
                        <a href="/">Terms</a>,
                        <a href="/">Privacy Policy</a> and <a href="/">Cookie Policy</a>.
                    </p>
                    <button
                        className="w258"
                        style={formValid ? {opacity: "1", cursor: "pointer"} : {opacity: ".7"}}
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


export default App