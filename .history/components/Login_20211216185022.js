import React from 'react'
import { signIn } from 'next-auth/react'

function Login({ providers }) {

    return (
        <div className=' text-white'>
            {Object.values(providers).map(provider => (
                <button key={provider.name} className='bg-gray-600 '>Sign In with {provider.name}</button>
            ))}
        </div>
    )
}

export default Login
