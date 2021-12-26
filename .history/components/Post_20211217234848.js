import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Head from 'next/head';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';


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
                    <img src='https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/120232674_713344279394520_7558732814290978650_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=r2IJDnyrv7YAX9D_68k&_nc_ht=scontent.fhan5-4.fna&oh=00_AT8yh6CPPCI7KrEBk2y0yl3JjxCAOVnVqQPmxxxJS9d9_w&oe=61E188B2' alt='' />
                </div>
                <div className='ml-auto '>
                    <MoreHorizIcon className='text-white' />
                </div>
            </div>
            <div className='flex justify-around items-center  w-full px-4 h-7 bg-gray-500 min-h-[32px] '>
                <ChatBubbleOutlineIcon className='cursor-pointer hover:text-blue-500' />
                <AutorenewRoundedIcon className='cursor-pointer hover:text-blue-500' />
                <FavoriteBorderIcon className='cursor-pointer hover:text-blue-500' />
                <IosShareIcon className='cursor-pointer hover:text-blue-500' />
            </div>
        </div>
    )
}

export default Post
