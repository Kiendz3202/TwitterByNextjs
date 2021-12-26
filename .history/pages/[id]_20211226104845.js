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

function CommentPage({ trendingResults, followResults, providers }) {
    const { data: session } = useSession();
    const ctx = useContext(AppContext)
    const [comments, setComments] = useState([])
    const [post, setPost] = useState();
    const router = useRouter()
    const { id } = router.query

    // useEffect(
    //     () =>
    //         onSnapshot(doc(db, "posts", ctx.postId), (snapshot) => {
    //             setPost(snapshot.data());
    //         }),
    //     [db]
    // );

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "posts", id, "comments"),
                    orderBy("timestamp", "desc")
                ),
                (snapshot) => setComments(snapshot.docs)
            ),
        [db]
    );


    if (!session) return <Login providers={providers} />;
    // useEffect(
    //     () =>
    //         onSnapshot(
    //             query(collection(db, "posts", ctx.handlerPostId, "comments"), orderBy("timestamp", "desc")),
    //             (snapshot) => {
    //                 setComments(snapshot.docs)
    //             }
    //         ),
    //     [db]
    // );

    return (
        <div>
            {comments.map((comment) =>
                <div key={comment.id} className='text-white'>
                    <p>{comment.comment}</p>
                    <p>{comment.username}</p>
                </div>
            )}
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
