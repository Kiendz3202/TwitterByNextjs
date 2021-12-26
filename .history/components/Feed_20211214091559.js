import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';

function Feed() {
    return (
        <div className='flex-1 max-w-[768px] border-r border-l border-gray-400 ml-[60px] xl:ml-[340px]'>
            <div className='flex justify-between text-white'>
                <p>Home</p>
                <FlareIcon />
            </div>
        </div>
    )
}

export default Feed
