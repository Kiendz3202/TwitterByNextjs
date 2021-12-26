import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Sidebar() {
    return (
        <div className='w-64 h-screen text-2xl font-normal'>
            <ul>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <TwitterIcon />
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <HomeIcon />
                        <p className='pl-3'>Home</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <TagIcon />
                        <p>Explore</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <NotificationsIcon />
                        <p>Notifications</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <EmailIcon />
                        <p>Messages</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <BookmarkIcon />
                        <p>Bookmarks</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <TwitterIcon />
                        <p>Home</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <ListIcon />
                        <p>Lists</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <PermIdentityIcon />
                        <p>Profile</p>
                    </div>
                </li>
                <li className='text-white mb-7 '>
                    <div className='flex h-7 items-center'>
                        <MoreHorizIcon />
                        <p>More</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
