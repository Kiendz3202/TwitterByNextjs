import React, { Fragment, useRef, useState } from 'react'
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



function Feed({ session }) {
    const [isEmoji, setIsEmoji] = useState(false)
    const [isChosenImgSrc, setIsChosenImgSrc] = useState(false)
    const imgsrcRef = useRef()
    const imgsrc = imgsrcRef.current.value;
    if (imgsrc) {
        setIsChosenImgSrc(true)
    }


    const chooseImageHandler = (event) => {
        const image = document.getElementById('inputImage')
        image.click()
    }
    const chooseIconHandler = () => {
        setIsEmoji(isEmoji => !isEmoji)

    }

    return (
        <div className='flex-1 max-w-[600px] border-r border-l border-gray-400 ml-[60px] xl:ml-[260px]'>
            <div className='flex justify-between text-white border-b-2 border-gray-400 p-4 text-xl font-medium sticky z-50'>
                <p>Home</p>
                <FlareIcon />
            </div>
            <div>
                <div className='border-b-2 border-gray-500 flex px-4 py-2 w-full  ' >
                    <div >
                        <Avatar src={session.image} className='w-[46px] h-[46px]' />
                    </div>
                    <form className='ml-4 w-full'>
                        <textarea className='w-full bg-transparent outline-0 min-h-[50px] row-2  overflow-y-hidden' placeholder="What's happening?" />
                        {isChosenImgSrc && <div>
                            <img className=' object-contain mb-2' src={imgsrc} alt='' />
                        </div>}
                        <div className='flex justify-between'>
                            <div className='text-white flex gap-x-2'>
                                <span className='cursor-pointer hover:bg-opacity-80' onClick={chooseImageHandler}>
                                    <ImageIcon />
                                    <input ref={imgsrcRef} id='inputImage' type='file' className='hidden' />
                                </span>
                                <CardGiftcardIcon />
                                <AlignHorizontalLeftIcon />
                                <span className='cursor-pointer hover:bg-opacity-80 relative' >
                                    <InsertEmoticonIcon onClick={chooseIconHandler} />
                                </span>
                                <InsertInvitationIcon />
                            </div>
                            {isEmoji && <Picker
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
                        </div>
                    </form>
                </div>
            </div>
            <div >
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed
