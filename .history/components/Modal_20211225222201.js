import React, { Fragment, useRef } from 'react'
import FlareIcon from '@mui/icons-material/Flare';
import Image from 'next/image';
import ImageIcon from '@mui/icons-material/Image';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CloseIcon from '@mui/icons-material/Close';
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

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


const { data: session } = useSession();
const [isEmoji, setIsEmoji] = useState(false)
const [selectedFile, setSelectedFile] = useState(null)
const [input, setInput] = useState('')
const [loading, setLoading] = useState(false)
const filePickerRef = useRef(null)
const [posts, setPosts] = useState([])

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
            <div className='fixed top-[200px] inset-x-2/4 translate-x-2/4  w-1/3 h-1/3  bg-white text-black z-50'>
                <button onClick={handlerClose}>close</button>
                <div className={`${loading && "opacity-80"}`}>
                    <div className='border-b-2 border-gray-500 flex px-4 py-2 w-full  ' >
                        <div >
                            <Avatar src={session.user.image} className='w-[46px] h-[46px]' />
                        </div>
                        <form onSubmit={sendPost} className='ml-4 w-full'>
                            <textarea value={input} onChange={(e) => setInput(e.target.value)} className='w-full bg-transparent outline-0 min-h-[50px] row-2  overflow-y-hidden' placeholder="What's happening?" />
                            {selectedFile && <div className='relative'>
                                <img src={selectedFile} className=' object-contain mb-2' alt='' />
                                <div className='absolute top-0 bg-gray-400 rounded-full' onClick={() => setSelectedFile(null)}>
                                    <CloseIcon className='text-white' />
                                </div>
                            </div>}
                            {!loading && <div className='flex justify-between'>
                                <div className='text-white flex gap-x-2'>
                                    <span className='cursor-pointer hover:bg-opacity-80' onClick={() => filePickerRef.current.click()}>
                                        <ImageIcon />
                                        <input onChange={addImageToPost} ref={filePickerRef} id='inputImage' type='file' className='hidden' />
                                    </span>
                                    <CardGiftcardIcon />
                                    <AlignHorizontalLeftIcon />
                                    <span className='cursor-pointer hover:bg-opacity-80 relative' >
                                        <InsertEmoticonIcon onClick={chooseIconHandler} />
                                    </span>
                                    <InsertInvitationIcon />
                                </div>
                                {isEmoji && <Picker
                                    onSelect={addEmoji}
                                    style={{
                                        position: "absolute",
                                        marginTop: "45px",
                                        maxWidth: "280px",

                                    }}
                                    them="light"
                                />
                                }
                                <div>
                                    <button className='bg-[#1d9bf0] w-[60px] h-[30px] rounded-full cursor-pointer hover:bg-opacity-80'>Tweet</button>
                                </div>
                            </div>}
                        </form>
                    </div>
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
