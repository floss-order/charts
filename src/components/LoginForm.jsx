import React, { useRef, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import * as api from '../api'

function LoginForm({history}) {
    const loginRegExp = '^[a-z0-9A-Z]{3,20}$' 
    const passwordRegExp = '^.{5,}$'

    const loginRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = useCallback(async event => {
        event.preventDefault()

        const credentials = {
            login: loginRef.current.value,
            password: passwordRef.current.value
        }

        const user = await api.login(credentials)

        localStorage.setItem('login', user.login)
        localStorage.setItem('token', user.token)

        history.push('/')
    }, [history])
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

export default withRouter(LoginForm)
