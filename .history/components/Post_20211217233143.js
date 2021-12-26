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
                <i className="fa fa-retweet text-white h-4 w-4" aria-hidden="true"></i>
                <FavoriteBorderIcon />
                <IosShareIcon />
            </div>
        </div>
    )
}

export default Post
