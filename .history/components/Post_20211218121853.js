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
        <div className='flex justify-start w-full px-4 h-7 bg-gray-500 min-h-[132px] '>
            <div>
                <Avatar src='' alt='' />
            </div>
            <div className=''>
                <div className='text-white flex-1 px-4 '>
                    <p className='font-bold text-lg'>Manh Kien<span className='px-1 font-light text-sm'>@manhkien</span></p>
                    <p>main text</p>
                </div>
                <div>
                    <img className='w-full' src='https://phongnhaexplorer.com/wp-content/uploads/con-cat-quang-phu-1-1.jpg' alt='' />
                </div>
                <div className='flex justify-around items-center  w-full px-4 h-7 bg-yellow-500 min-h-[32px] '>
                    <ChatBubbleOutlineIcon className='cursor-pointer hover:text-blue-500' />
                    <AutorenewRoundedIcon className='cursor-pointer hover:text-blue-500' />
                    <FavoriteBorderIcon className='cursor-pointer hover:text-blue-500' />
                    <IosShareIcon className='cursor-pointer hover:text-blue-500' />
                </div>
            </div>
            <div className='ml-auto '>
                <MoreHorizIcon className='text-white' />
            </div>
        </div>
    )
}

export default Post



// <div className='w-full'>
//             <div className='flex justify-start w-full px-4 h-7 bg-gray-500 min-h-[132px]'>
//                 <div>
//                     <Avatar src='' alt='' />
//                 </div>
//                 <div className='text-white flex-1 px-4 '>
//                     <p className='font-bold text-lg'>Manh Kien<span className='px-1 font-light text-sm'>@manhkien</span></p>
//                     <p>main text</p>
//                     <img src='https://phongnhaexplorer.com/wp-content/uploads/con-cat-quang-phu-1-1.jpg' alt='' />
//                 </div>
//                 <div className='ml-auto '>
//                     <MoreHorizIcon className='text-white' />
//                 </div>
//             </div>
//             <div className='flex justify-around items-center  w-full px-4 h-7 bg-yellow-500 min-h-[32px] '>
//                 <ChatBubbleOutlineIcon className='cursor-pointer hover:text-blue-500' />
//                 <AutorenewRoundedIcon className='cursor-pointer hover:text-blue-500' />
//                 <FavoriteBorderIcon className='cursor-pointer hover:text-blue-500' />
//                 <IosShareIcon className='cursor-pointer hover:text-blue-500' />
//             </div>
//         </div>