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
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>Home</p>
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>Explore</p>
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>Notifications</p>
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>Messages</p>
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>Bookmarks</p>
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>Home</p>
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>Lists</p>
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>Profile</p>
                    </div>
                </li>
                <li className='text-white'>
                    <div>
                        <TwitterIcon />
                        <p>More</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
