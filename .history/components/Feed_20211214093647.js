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
                        <Image src='https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/101407871_637496476979301_5620130239150555136_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=PyGiXNjDPRAAX_tboBO&_nc_ht=scontent.fhan5-6.fna&oh=00_AT8tLml-ZmrvO0RkvIfg2CVwc7aoviOEwyLg0sTyTJHKwQ&oe=61DBDF0C' alt='' width={40} height={40} />
                    </div>
                    <div>
                        <textarea placeholder="What's happening?" />
                        <div>
                            {/* emoji */}
                            {/* tweet */}
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
