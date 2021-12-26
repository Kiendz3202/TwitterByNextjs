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
// w-64 h-screen text-2xl font-normal
// hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full
function Sidebar() {
    return (
        <div className=' sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
            <ul>
                <li className='text-white mb-8 mt-2 hover:opacity-80   hoverAnimation block'>
                    <div className='flex h-7 items-centerp-[6px]'>
                        <span>
                            <TwitterIcon className='h-8 w-8' />
                        </span>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2  hover:opacity-80  hoverAnimation block' >
                    <div className='flex h-7 items-center justify-center xl:justify-start jup-[6px]stify-center xl:justify-start'>
                        <span>
                            <HomeIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Home</p>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-startp-[6px]'>
                        <span>
                            <TagIcon className='h-8 w-8 ' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Explore</p>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-startp-[6px]'>
                        <span>
                            <NotificationsNoneIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Notifications</p>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2  hover:opacity-80  hoverAnimation block' >
                    <div className='flex h-7 items-center justify-center xl:justify-startp-[6px]'>
                        <span>
                            <MailOutlineIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Messages</p>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-startp-[6px]'>
                        <span className='font-light'>
                            <BookmarkBorderIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Bookmarks</p>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-startp-[6px]'>
                        <span>
                            <ListIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Lists</p>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-startp-[6px]'>
                        <span>
                            <PermIdentityIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>Profile</p>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className='flex h-7 items-center justify-center xl:justify-startp-[6px]'>
                        <span>
                            <MoreHorizIcon className='h-8 w-8' />
                        </span>
                        <p className='pl-4 hidden xl:inline'>More</p>
                    </div>
                </li>
                <li className='text-white mb-8 mt-2 hover:opacity-80  hoverAnimation block'>
                    <div className=' p-[6px]'>
                        <button className='h-8 w-8 text-[10px] xl:inline  bg-[#1d9bf0] text-white rounded-full xl:w-56 xl:h-[52px] xl:text-lg font-bold shadow-md hover:bg-[#1a8cd8]' >Tweet</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
