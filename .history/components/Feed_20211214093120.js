import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';
import Image from 'next/image';

function Feed() {
    return (
        <div className='flex-1 max-w-[768px] border-r border-l border-gray-400 ml-[60px] xl:ml-[340px]'>
            <div className='flex justify-between text-white border-b-2 border-gray-400 p-4 text-xl font-medium sticky z-50'>
                <p>Home</p>
                <FlareIcon />
            </div>
            <div>
                <div>
                    <div>
                        <Image scr='' alt='' />
                    </div>
                    <div>
                        <textarea>Something new...?</textarea>
                        <div>
                            {/* emoji */}
                        </div>
                    </div>
                </div>
                <div>
                    {/* post */}
                </div>
            </div>
        </div>
    )
}

export default Feed
