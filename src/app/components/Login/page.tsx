"use client"
import React, { useState } from 'react'
import { login, logOut, toogleModerator } from '@/app/stores/features/auth'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/stores/store'

const Login = () => {

    const dispatch = useDispatch<AppDispatch>()

    const [username, setUserName] = useState<string>('')
    const onClickLogin = () => {
        dispatch(login(username))
    }
    const onClickLogout = () => {
        dispatch(logOut())
    }
    const onClickToogle = () => {
        dispatch(toogleModerator())
    }


    return (
        <div>

            <h1>Login</h1>
            <hr></hr>
            <input onChange={(e) => setUserName(e.target.value)} type="text" />
            <br></br>
            <button onClick={() => onClickLogin()}>Login</button>
            <br></br>

            <button onClick={() => onClickLogout()}>Logout</button>
            <br></br>
            <button onClick={() => onClickToogle()}>Toogle Moderator Status</button>

        </div>
    )
}

export default Login