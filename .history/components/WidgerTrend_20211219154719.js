import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function WidgerTrend({ trendDetail }) {
    return (
        <div className='flex justify-between items-center  px-[12px] py-[8px] hover:bg-zinc-700'>
            <div>
                <p className='text-[13px] font-light text-gray-400'>{trendDetail.heading}</p>
                <p className=' text-[15px] font-semibold '>{trendDetail.description}</p>
                <p className='text-[13px] font-light text-gray-400'>Trending with {trendDetail.tags.map((tag, index) => <span key={index}>{tag}</span>)}</p>
            </div>
            <div>
                <MoreHorizIcon />
            </div>
        </div>
    )
}

export default WidgerTrend
