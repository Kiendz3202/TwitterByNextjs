import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect, useContext } from 'react'
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

function Modal({ show, close }) {
    const { data: session } = useSession();
    const ctx = useContext(AppContext)
    const idOfPost = ctx.postId
    const [isBrowser, setIsBrowser] = useState(false)
    const [post, setPost] = useState()

    const handlerClose = (e) => {
        e.preventDefault();
        close()
    }






    useEffect(() => {
        setIsBrowser(true)
    }, [])
    const modalContent = show ? (
        <div>
            <div onClick={handlerClose} className='bg-black opacity-40 z-40 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed top-[200px] inset-x-2/4 translate-r-2/4  w-[300px]  bg-white text-black z-50'>
                <button onClick={handlerClose}>close</button>
                <div className='z-50'>
                    <p>{session.user.name}</p>
                </div>
            </div>
        </div>
    ) : null;
    if (isBrowser) {
        return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))
    } else {
        return null
    }


}

export default Modal
