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
import InputModal from './InputModal';
import CloseIcon from '@mui/icons-material/Close';

// function Modal({ show, close }) {
//     const { data: session } = useSession();
//     const ctx = useContext(AppContext)
//     const [isBrowser, setIsBrowser] = useState(false)
//     const [post, setPost] = useState()

//     const handlerClose = (e) => {
//         e.preventDefault();
//         close()
//     }






//     useEffect(() => {
//         setIsBrowser(true)
//     }, [])
//     const modalContent = show ? (
//         <div>
//             <div onClick={handlerClose} className=' bg-gray-500 opacity-40 z-40 fixed top-0 left-0 w-full h-screen'></div>
//             <div className='fixed top-[50px] inset-x-2/4 translate-x-2/4  w-1/3 text-white z-50 bg-black rounded-xl'>
//                 <button onClick={handlerClose} className='block rounded-full  hover:opacity-80'><CloseIcon /></button>
//                 <InputModal />
//             </div>
//         </div>
//     ) : null;
//     if (isBrowser) {
//         return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))
//     } else {
//         return null
//     }


// }

// export default Modal


function Modal({ show, close }) {
    const { data: session } = useSession();
    const ctx = useContext(AppContext)
    const [post, setPost] = useState()

    const handlerClose = (e) => {
        e.preventDefault();
        close()
    }
    if (show) {
        return (
            <div>
                <div onClick={handlerClose} className=' bg-gray-500 opacity-40 z-40 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed top-[50px] inset-x-2/4 translate-x-2/4  w-1/3 text-white z-50 bg-black rounded-xl'>
                    <button onClick={handlerClose} className='block rounded-full  hover:opacity-80'><CloseIcon /></button>
                    <InputModal />
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Modal

