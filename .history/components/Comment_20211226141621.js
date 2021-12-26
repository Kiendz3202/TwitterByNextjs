import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Head from 'next/head';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import Moment from 'react-moment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSession } from 'next-auth/react';

function Comment({ comment }) {
    const { data: session } = useSession()
    const router = useRouter()
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState([])
    return (
        <div className='flex justify-start  px-4  min-h-[50px] h-full mt-5 border-b border-gray  '>
            <div>
                <Avatar src={comment?.userImg} alt='' />
            </div>
            <div className=''>
                <div className='text-white flex-1 px-4 mb-2 '>
                    <p className='font-bold text-lg'>{comment?.username}<span className='px-1 font-light text-sm'>@{comment?.tag}</span><span className='px-1 font-light text-sm'><Moment fromNow>{comment?.timestamp?.toDate()}</Moment></span></p>
                    <p>{comment?.comment}</p>
                </div>
                <div className='flex justify-around items-center  w-full px-4 h-7  min-h-[32px] mb-2 '>
                    <ChatBubbleOutlineIcon className='cursor-pointer hover:text-red-500 text-base' />
                    <AutorenewRoundedIcon className='cursor-pointer hover:text-red-500 text-base' />
                    <FavoriteBorderIcon className="cursor-pointer hover:text-red-500 text-base" />
                    <IosShareIcon className='cursor-pointer hover:text-red-500 text-base' />
                </div>
            </div>
            <div className='ml-auto '>
                <MoreHorizIcon className='text-white' />
            </div>
        </div>
    )
}

export default Comment
