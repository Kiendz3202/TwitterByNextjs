import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Widger() {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='h-[60px] flex justify-center items-center w-full '>
                <SearchIcon />
                <input type='text' placeholder='Search Twitter' className='bg-slate-800 p-3 flex items-center w-full rounded-full' />
            </div>
        </div>
    )
}

export default Widger
