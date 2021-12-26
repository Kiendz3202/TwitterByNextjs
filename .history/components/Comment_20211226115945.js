import React from 'react'

function Comment({ comment }) {
    return (
        <div className='flex justify-start  px-4  min-h-[132px] h-full mt-5 border-b border-gray  '>
            <div>
                <Avatar src={post?.userImg} alt='' />
            </div>
            <div className=''>
                <div className='text-white flex-1 px-4 mb-2 '>
                    <p className='font-bold text-lg'>{post?.username}<span className='px-1 font-light text-sm'>@{post?.tag}</span><span className='px-1 font-light text-sm'><Moment fromNow>{post?.timestamp?.toDate()}</Moment></span></p>
                    <p>{post?.text}</p>
                </div>
                <div className='flex justify-around items-center  w-full px-4 h-7  min-h-[32px] mb-2 '>
                    <span onClick={openModal}><ChatBubbleOutlineIcon className='cursor-pointer hover:text-blue-500 text-base' /></span>
                    <AutorenewRoundedIcon className='cursor-pointer hover:text-blue-500 text-base' />
                    <span onClick={likePost}>{liked ? <FavoriteIcon className="cursor-pointer text-red-500 hover:bg-opacity-80 text-base" /> : <FavoriteBorderIcon className="cursor-pointer hover:text-red-500 text-base" />} {likes.length > 0 && likes.length}</span>
                    <IosShareIcon className='cursor-pointer hover:text-blue-500 text-base' />
                </div>
            </div>
            <div className='ml-auto '>
                <MoreHorizIcon className='text-white' />
            </div>
        </div>
    )
}

export default Comment
