import React, { Fragment, useRef, useState, useEffect } from 'react'
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
import Post from './Post';
import { Avatar } from '@mui/material';
import { db, storage } from "../firebase";
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { useSession } from "next-auth/react";
import { onSnapshot, query, orderBy } from "@firebase/firestore";

function Input() {
    const { data: session } = useSession();
    const [isEmoji, setIsEmoji] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const filePickerRef = useRef(null)
    const [posts, setPosts] = useState([])

    const sendPost = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);

        const docRef = await addDoc(collection(db, "posts"), {
            id: session.user.uid,
            username: session.user.name,
            userImg: session.user.image,
            tag: session.user.tag,
            text: input,
            timestamp: serverTimestamp(),
        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        if (selectedFile) {
            await uploadString(imageRef, selectedFile, "data_url").then(async () => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, "posts", docRef.id), {
                    image: downloadURL,
                });
            });
        }


        setLoading(false);
        setInput("");
        setSelectedFile(null);
        setIsEmoji(false);
    };


    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    const chooseIconHandler = () => {
        setIsEmoji(isEmoji => !isEmoji)

    }
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    }

    useEffect(() => {
        const tx = document.getElementsByTagName("textarea");
        for (let i = 0; i < tx.length; i++) {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
            tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput() {
            this.style.height = "auto";
            this.style.height = (this.scrollHeight) + "px";
        }
    }, [])


    return (
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
    )
}

export default Input
