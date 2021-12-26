import React from 'react'
import { signIn } from 'next-auth/react'

function Login({ providers }) {

    return (
        <div>
            {Object.values(providers).map(provider => (
                <button key={provider.name}>Sign In with {provider.name}</button>
            ))}
        </div>
    )
}

export default Login
