import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function WidgerTrend() {
    return (
        <div className='flex justify-between items-center  px-[12px] py-[8px] hover:opacity-80'>
            <div>
                <p className='text-[13px] font-light text-gray-400'>Trending</p>
                <p className=' text-[15px] font-semibold '>#NFT</p>
                <p className='text-[13px] font-light text-gray-400'>312k Tweets</p>
            </div>
            <div>
                <MoreHorizIcon />
            </div>
        </div>
    )
}

export default WidgerTrend
