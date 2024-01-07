import './register.scss'
import { Link, redirect, Navigate, useNavigate } from 'react-router-dom'

import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import {CODE_EMAIL_EXIST,CODE_NAME_EXIST,INCORRET_LOGIN} from "./auth_ccodes"

export const FailRegisterComponent = (code: number | undefined) => {
    if (code != CODE_NAME_EXIST && code != CODE_EMAIL_EXIST && code != INCORRET_LOGIN) {
        return;
    }
    if (code === CODE_EMAIL_EXIST) {
        return (
            <p style={{ color: 'red' }}>Email already exists</p>
        );
    }
    if (code === CODE_NAME_EXIST) {
        return (
            <p style={{ color: 'red' }}>Name already exists</p>
        );
    }
    if (code === INCORRET_LOGIN) {
        return (
            <p style={{ color: 'red' }}>incorrect credentials </p>
        );
    }
};