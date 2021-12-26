import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Post() {
    return (
        <div className='flex justify-start w-11/12 h-7 bg-yellow-300 min-h-[132px]'>
            <div>
                <Avatar src='' alt='' />
            </div>
            <div className='text-white flex-1'>
                <p>Manh Kien<span>@manhkien</span></p>
            </div>
            <div className='ml-auto '>
                <MoreHorizIcon className='text-white' />
            </div>
        </div>
    )
}

export default Post
