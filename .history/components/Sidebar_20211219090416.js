import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/image'
import { Avatar } from '@mui/material';
// w-64 h-screen text-2xl font-normal
// hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full
function Sidebar({ session }) {
    const tagname = session.tag.replace(/[^A-Za-z0-9\s]/g, "").replace(/\s{2,}/g, " ")
    return (
        <div className=' flex flex-col justify-center items-center xl:items-start xl:w-[260px] p-2 fixed h-full'>
            <ul className='h-full w-full'>
                <li className='text-white mb-4 p-2 mt-2 hover:opacity-80   hoverAnimation block'>
                    <div className='flex h-7 items-center'>
                        <span>
                            <TwitterIcon className='h-8 w-8' />
                        </span>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2  hover:opacity-80  hoverAnimation block' >
                    <div className='flex h-7 items-center  justify-center xl:justify-start'>
                        <span>
                            <HomeIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Home</p>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-start'>
                        <span>
                            <TagIcon className='h-8 w-8 ' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Explore</p>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-start'>
                        <span>
                            <NotificationsNoneIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Notifications</p>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2  hover:opacity-80  hoverAnimation block' >
                    <div className='flex h-7 items-center justify-center xl:justify-start'>
                        <span>
                            <MailOutlineIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Messages</p>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-start'>
                        <span className='font-light'>
                            <BookmarkBorderIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Bookmarks</p>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-start'>
                        <span>
                            <ListIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Lists</p>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-start'>
                        <span>
                            <PermIdentityIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Profile</p>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-start'>
                        <span>
                            <MoreHorizIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>More</p>
                    </div>
                </li>
                <li className='text-white mb-4 p-2 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className=' '>
                        <button className='h-8 w-8 text-[10px] xl:inline  bg-[#1d9bf0] text-white rounded-full xl:w-56 xl:h-[52px] xl:text-lg font-bold shadow-md hover:bg-[#1a8cd8]' >Tweet</button>
                    </div>
                </li>
                <li className='hidden xl:block text-white mt-10 p-2 hover:opacity-80  hoverAnimation border-2 rounded-full  border-gray-400'>
                    <div className=' xl:flex h-7 items-center justify-center xl:justify-between  ' >
                        <Avatar src={session.image} />
                        <div className='mr-8'>
                            <h3 className=' text-sm'>{session.name}</h3>
                            <p className=' text-sm'>{"@" + tagname}</p>
                        </div>
                        <MoreHorizIcon />
                    </div>
                </li>
            </ul>
        </div >
    )
}

export default Sidebar
