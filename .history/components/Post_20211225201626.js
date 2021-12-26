import React, { useContext, useState, useEffect } from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Head from 'next/head';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import Link from 'next/link'
import Image from 'next/image';
import Moment from "react-moment"
import AppContext from '../store';
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
} from "@firebase/firestore";
import { useSession } from "next-auth/react"
import { db } from '../firebase';



function Post({ id, post }) {
    const { data: session } = useSession()
    const ctx = useContext(AppContext)
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState([])
    const [comments, setComments] = useState([])

    ctx.post = post;

    useEffect(
        () =>
            onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
                setLikes(snapshot.docs)
            ),
        [db, id]
    );

    useEffect(
        () =>
            setLiked(
                likes.findIndex((like) => like.id === session?.user?.uid) !== -1
            ),
        [likes]
    );

    const likePost = async () => {
        if (liked) {
            await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
        } else {
            await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
                username: session.user.name,
            });
        }
    };
    const openModal = () => {
        ctx.handlerPostId(id)
        ctx.open();
    }
    console.log(ctx.postId)

    return (
        <div className='flex justify-start  px-4  min-h-[132px] h-full mt-5 border-b border-gray  '>
            <div>
                <Avatar src={post?.userImg} alt='' />
            </div>
            <div className=''>
                <Link href={`/${id}`}>
                    <a >
                        <div className='text-white flex-1 px-4 mb-2 '>
                            <p className='font-bold text-lg'>{post?.username}<span className='px-1 font-light text-sm'>@{post?.tag}</span><span className='px-1 font-light text-sm'><Moment fromNow>{post?.timestamp?.toDate()}</Moment></span></p>
                            <p>{post?.text}</p>
                        </div>

                        <img className='w-full object-contains rounded-lg mb-3' src={post?.image} alt='' />
                    </a>
                </Link>

                <div className='flex justify-around items-center  w-full px-4 h-7  min-h-[32px] mb-2 '>
                    <span onClick={openModal}><ChatBubbleOutlineIcon className='cursor-pointer hover:text-blue-500 text-base' /></span>
                    <AutorenewRoundedIcon className='cursor-pointer hover:text-blue-500 text-base' />
                    <span onClick={likePost}>{liked ? <FavoriteIcon className="cursor-pointer text-red-500 hover:bg-opacity-80 text-base" /> : <FavoriteBorderIcon className="cursor-pointer hover:text-red-500 text-base" />} {likes.length > 0 && likes.length}</span>
                    <IosShareIcon className='cursor-pointer hover:text-blue-500 text-base' />
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