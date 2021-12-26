import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import WidgerTrend from './WidgerTrend';


function Widger({ trending, follow }) {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='sticky top-0 z-20 h-[50px] flex items-center justify-start  items-center w-full bg-zinc-800 rounded-full '>
                <SearchIcon className='text-white ml-2' />
                <input type='text' placeholder='Search Twitter' className=' text-lg bg-transparent w-[250px] ml-3  outline-none' />
            </div>
            <div className='sticky top-0 h-[380px] bg-zinc-800 w-full mt-3  rounded-2xl'>
                <div className='flex justify-between items-center leading-[12px] py-[12px] px-[16px] text-xl font-extrabold'>
                    <p>Trends for you</p>
                    <SettingsIcon />
                </div>
                {trending.map((trend) => <WidgerTrend key={trend} trendDetail={trend} />)}
                <div className='flex justify-start items-center h-[30px] pl-[12px] mt-[20px] cursor-pointer text-blue-500 hover:opacity-80'>
                    <p className='text-[14px]'>Show more</p>
                </div>
                <div className='sticky   h-[280px] bg-zinc-800 w-full mt-3  rounded-2xl'>
                    {trending.map((trend) => <WidgerTrend key={trend} trendDetail={trend} />)}
                </div>
            </div>
        </div>
    )
}

export default Widger
