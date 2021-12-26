import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Widger() {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='h-[50px] flex items-center justify-start mt-[5px] items-center w-full bg-zinc-800 rounded-full '>
                <SearchIcon className='text-white ml-2' />
                <input type='text' placeholder='Search Twitter' className=' text-lg bg-transparent w-[250px] ml-3  outline-none' />
            </div>
            <div className='h-[512px] bg-zinc-800 w-full mt-3 rounded-2xl'>
                <div className='flex justify-between items-center leading-[12px] py-[12px] px-[16px] text-xl font-extrabold'>
                    <p>Trends for you</p>
                    <SettingsIcon />
                </div>
                <div className='flex justify-between items-center h-[58px] px-[12px] py-[16px]'>
                    <div>
                        <p>Trending</p>
                        <p className=' text-[15px] font-semibold '>#NFT</p>
                        <p>312k Tweets</p>
                    </div>
                    <div>
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widger
