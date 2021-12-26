import React, { useState, useEffect } from 'react'
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
import { useRouter } from 'next/router';
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    getDoc
} from "@firebase/firestore";
import { db } from '../firebase';

function Comment({ comment, idPost, id }) {
    const { data: session } = useSession()
    const router = useRouter()
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState([])


    useEffect(
        () =>
            onSnapshot(collection(db, "posts", idPost, "likes"), (snapshot) =>
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



    const likePost = async (e) => {
        e.stopPropagation()
        if (liked) {
            await deleteDoc(doc(db, "posts", idPost, "likes", session.user.uid));
        } else {
            await setDoc(doc(db, "posts", idPost, "likes", session.user.uid), {
                username: session.user.name,
            });
        }
    };


    const handlerDelete = async (e) => {
        e.stopPropagation();
        const ref = doc(db, "posts", idPost, "comments", id);
        const docSnap = getDoc(ref)
        // if (!docSnap.exists()) {
        //     return;
        // }
        await deleteDoc(ref)
            .then(() => {
                alert("Delete successfully")
            })
            .catch((error) => {
                alert("error")
            })
        router.push("/")
    }
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
                    {session.user.uid === comment.id ? <span onClick={handlerDelete}><DeleteIcon className='cursor-pointer hover:text-red-500 text-base' /></span> : <AutorenewRoundedIcon className='cursor-pointer hover:text-red-500 text-base' />}
                    <span onClick={likePost}>{liked ? <FavoriteIcon className="cursor-pointer text-red-500 hover:bg-opacity-80 text-base" /> : <FavoriteBorderIcon className="cursor-pointer hover:text-red-500 text-base" />} {likes.length > 0 && likes.length}</span>
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
