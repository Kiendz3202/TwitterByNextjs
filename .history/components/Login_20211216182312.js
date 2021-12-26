import React from 'react'
import { signIn } from 'next-auth/react'

function Login({ providers }) {
    const clickHandler = (event) => {
        event.preventDefault();
        console.log(providers)
    }
    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default Login
