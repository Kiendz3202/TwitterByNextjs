import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


function Post() {
    return (
        <div className='w-full'>
            <div className='flex justify-start w-full px-4 h-7 bg-gray-500 min-h-[132px]'>
                <div>
                    <Avatar src='' alt='' />
                </div>
                <div className='text-white flex-1 px-4'>
                    <p className='font-bold text-lg'>Manh Kien<span className='px-1 font-light text-sm'>@manhkien</span></p>
                    <p>main text</p>
                    <img src='' alt='' />
                </div>
                <div className='ml-auto '>
                    <MoreHorizIcon className='text-white' />
                    <img src='https://w7.pngwing.com/pngs/23/500/png-transparent-computer-icons-symbol-share-icon-symbol-miscellaneous-angle-triangle-thumbnail.png' />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Post
