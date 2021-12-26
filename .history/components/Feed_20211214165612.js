import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';
import Image from 'next/image';
import ImageIcon from '@mui/icons-material/Image';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import { useState } from 'react';



function Feed() {
    const [isEmoji, setIsEmoji] = useState(false)


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
                        <Image className='rounded-full' src='https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/101407871_637496476979301_5620130239150555136_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=PyGiXNjDPRAAX_tboBO&_nc_ht=scontent.fhan5-6.fna&oh=00_AT8tLml-ZmrvO0RkvIfg2CVwc7aoviOEwyLg0sTyTJHKwQ&oe=61DBDF0C' alt='' width={46} height={46} />
                    </div>
                    <div className='ml-4 flex-1'>
                        <textarea className='w-full bg-transparent outline-0 min-h-[50px] row-2  overflow-y-hidden' placeholder="What's happening?" />
                        <div className='flex justify-between'>
                            <div className='text-white flex gap-x-2'>
                                <span className='cursor-pointer hover:bg-opacity-80' onClick={chooseImageHandler}>
                                    <ImageIcon />
                                    <input id='inputImage' type='file' className='hidden' />
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
                                    marginLeft: '0px',
                                    maxWidth: "320px",

                                }}
                                them="light"
                            />}
                            <div>
                                <button className='bg-[#1d9bf0] w-[60px] h-[30px] rounded-full cursor-pointer hover:bg-opacity-80'>Tweet</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* post */}
                    {/* <span className='w-7 h-6'>
                        <Picker />
                    </span> */}
                </div>
            </div>
        </div>
    )
}

export default Feed
