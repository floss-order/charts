import React, { useContext, useRef } from 'react'
import * as api from '../api'
import { AuthContext } from '../context/AuthContext'

function Login() {
    const loginRegExp = '^[a-z0-9A-Z]{3,20}$' 
    const passwordRegExp = '^.{5,}$'

    const loginRef = useRef()
    const passwordRef = useRef()

    const {user, setUser} = useContext(AuthContext)

    function handleSubmit(event) {
        event.preventDefault()

        const credentials = {
            login: loginRef.current.value,
            password: passwordRef.current.value
        }
        api.login(credentials)
            .then(user => setUser(user))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login">Login</label>
            <input id="login" name="login" pattern={loginRegExp} ref={loginRef} type="text"/>

            <label htmlFor="password">Password</label>
            <input id="password" name="password" pattern={passwordRegExp} ref={passwordRef} type="password"/>

            <button type="submit">Login</button>
        </form>            
    )
}

export default Login
