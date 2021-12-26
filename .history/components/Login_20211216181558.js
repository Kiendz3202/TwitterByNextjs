import React from 'react'

function Login({ providers }) {
    return (
        <div>
            {Object.values(!!providers && providers).map(provider => (
                <div key={provider.name}>
                    <button>Sign in with {provider}</button>
                </div>
            ))}
        </div>
    )
}

export default Login
