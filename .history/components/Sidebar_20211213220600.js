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
        <div>
            <ul>
                <li className='text-white '>
                    <div className='flex'>
                        <TwitterIcon />
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <HomeIcon />
                        <p>Home</p>
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <TagIcon />
                        <p>Explore</p>
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <NotificationsIcon />
                        <p>Notifications</p>
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <EmailIcon />
                        <p>Messages</p>
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <BookmarkIcon />
                        <p>Bookmarks</p>
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <TwitterIcon />
                        <p>Home</p>
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <ListIcon />
                        <p>Lists</p>
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <PermIdentityIcon />
                        <p>Profile</p>
                    </div>
                </li>
                <li className='text-white '>
                    <div className='flex'>
                        <MoreHorizIcon />
                        <p>More</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
