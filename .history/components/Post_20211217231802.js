import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Post() {
    return (
        <div className='flex justify-start w-full px-4 h-7 bg-yellow-300 min-h-[132px]'>
            <div>
                <Avatar src='' alt='' />
            </div>
            <div className='text-white flex-1 px-4'>
                <p className='font-bold text-lg'>Manh Kien<span className='px-1 font-light text-sm'>@manhkien</span></p>
            </div>
            <div className='ml-auto '>
                <MoreHorizIcon className='text-white' />
            </div>
        </div>
    )
}

export default Post
