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

function Sidebar() {
    return (
        <div className='w-64 h-screen text-xl font-normal'>
            <ul>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <TwitterIcon className='text-2xl' />
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <HomeIcon className='text-2xl' />
                        <p className='pl-4'>Home</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <TagIcon className='text-2xl' />
                        <p className='pl-4'>Explore</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <NotificationsNoneIcon className='text-2xl' />
                        <p className='pl-4'>Notifications</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <MailOutlineIcon className='text-2xl' />
                        <p className='pl-4'>Messages</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <BookmarkBorderIcon className='text-2xl' />
                        <p className='pl-4'>Bookmarks</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <ListIcon className='text-2xl' />
                        <p className='pl-4'>Lists</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <PermIdentityIcon className='text-2xl' />
                        <p className='pl-4'>Profile</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <MoreHorizIcon className='text-2xl' />
                        <p className='pl-4'>More</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
