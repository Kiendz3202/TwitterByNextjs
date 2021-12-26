import React, { useContext, useState, useEffect } from 'react'
import AppContext from '../store'
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
} from "@firebase/firestore";
import { db } from '../firebase';
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Comment from '../components/Comment';
import Post from '../components/Post';
import Sidebar from "../components/Sidebar"
import Widger from "../components/Widger"
import Feed from '../components/Feed';
import ImageIcon from '@mui/icons-material/Image';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CloseIcon from '@mui/icons-material/Close';
import FlareIcon from '@mui/icons-material/Flare';


function CommentPage({ trendingResults, followResults, providers }) {
    const { data: session } = useSession();
    const ctx = useContext(AppContext)
    const [comments, setComments] = useState([])
    const [post, setPost] = useState();
    const router = useRouter()
    const { id } = router.query

    useEffect(
        () =>
            onSnapshot(doc(db, "posts", id), (snapshot) => {
                setPost(snapshot.data());
            }),
        [db]
    );

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "posts", id, "comments"),
                    orderBy("timestamp", "desc")
                ),
                (snapshot) => setComments(snapshot.docs)
            ),
        [db, id]
    );


    if (!session) return <Login providers={providers} />;
    console.log(comments)
    console.log(post)


    return (
        <div>
            <div className='flex max-w-7xl bg-black my-0 mx-auto min-h-screen z-10'>
                <Sidebar session={session.user} />
                {/* <Post id={id} post={post} /> */}
                <div className='flex-1 max-w-[600px] border-r border-l border-gray-400 ml-[60px] xl:ml-[260px]'>
                    <div className='flex justify-between text-white border-b-2 border-gray-400 p-4 text-xl font-medium sticky z-50'>
                        <p>Home</p>
                        <FlareIcon />
                    </div>
                    <Input />
                    <div >
                        <Post id={id} post={post} />
                    </div>
                </div>
                <Widger trending={trendingResults} follow={followResults} />
            </div>
            {/* {comments.map((comment) =>
                <Comment key={comment.id}
                    id={comment.id}
                    comment={comment.data()} />
            )} */}
        </div>
    )
}

export default CommentPage

export async function getServerSideProps(context) {
    const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
        (res) => res.json()
    );
    const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
        (res) => res.json()
    );
    const providers = await getProviders();
    const session = await getSession(context);

    return {
        props: {
            trendingResults,
            followResults,
            providers,
            session,
        },
    };
}
