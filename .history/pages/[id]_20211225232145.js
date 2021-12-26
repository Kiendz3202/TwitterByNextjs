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
import { useSession } from "next-auth/react"
import { db } from '../firebase';

function CommentPage() {
    const ctx = useContext(AppContext)
    const [comments, setComments] = useState([])

    // useEffect(() => {
    //     onSnapshot(collection(db, "posts", ctx.postId, "comments"), (snapshot) => {
    //         setComments(snapshot.docs)
    //     })
    // }, [])
    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts", ctx.handlerPostId, "comments"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setComments(snapshot.docs)
                }
            ),
        [db]
    );

    return (
        <div>
            {comments.map((comment) =>
                <div>
                    <p>{comment.comment}</p>
                    <p>{comment.username}</p>
                </div>
            )}
        </div>
    )
}

export default CommentPage
