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

function CommentPage({ trendingResults, followResults, providers }) {
    const { data: session } = useSession();
    const ctx = useContext(AppContext)
    const [comments, setComments] = useState([])
    const [post, setPost] = useState();
    const router = useRouter({})
    const { id } = router.query

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts", id), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setPost(snapshot.docs);
                }
            ),
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
                <Post id={id} post={post.data()} />
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
