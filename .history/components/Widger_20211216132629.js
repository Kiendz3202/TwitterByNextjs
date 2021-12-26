import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import WidgerTrend from './WidgerTrend';


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
                <WidgerTrend />
            </div>
        </div>
    )
}

export default Widger
