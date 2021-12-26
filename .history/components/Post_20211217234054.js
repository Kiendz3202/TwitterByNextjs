import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Head from 'next/head';


function Post() {
    return (
        <div className='w-full'>
            <Head>
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
            </Head>
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
                </div>
            </div>
            <div>
                <ChatBubbleOutlineIcon />
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 172 172"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M28.66667,35.83333l-28.66667,35.83333h21.5v43c0,11.85367 9.64633,21.5 21.5,21.5h83.13053l-11.46386,-14.33333h-71.66667c-3.94883,0 -7.16667,-3.21067 -7.16667,-7.16667v-43h21.5zM45.86947,35.83333l11.46387,14.33333h71.66667c3.94883,0 7.16667,3.21067 7.16667,7.16667v43h-21.5l28.66667,35.83333l28.66667,-35.83333h-21.5v-43c0,-11.85367 -9.64633,-21.5 -21.5,-21.5z"></path></g></g></svg>
                <FavoriteBorderIcon />
                <IosShareIcon />
            </div>
        </div>
    )
}

export default Post
