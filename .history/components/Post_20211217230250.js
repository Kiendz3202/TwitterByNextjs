import React from 'react'
import { Avatar } from '@mui/material'

function Post() {
    return (
        <div className='flex justify-center w-11/12 h-7 bg-yellow-300'>
            <div>
                <Logo />
            </div>
            <p className='text-white'>post</p>
            <div className='text-white bg-yellow-300 w-3 h-3'>123</div>
        </div>
    )
}

export default Post
