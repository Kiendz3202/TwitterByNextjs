import React from 'react'

function Input() {
    return (
        <div className={`${loading && "opacity-80"}`}>
            <div className='border-b-2 border-gray-500 flex px-4 py-2 w-full  ' >
                <div >
                    <Avatar src={session.image} className='w-[46px] h-[46px]' />
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
