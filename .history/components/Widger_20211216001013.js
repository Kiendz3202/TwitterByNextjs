import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Widger() {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='h-[60px] flex justify-center items-center w-full bg-slate-800 rounded-full '>
                <SearchIcon className='text-white' />
                <input type='text' placeholder='Search Twitter' className=' p-3 bg-transperent' />
            </div>
        </div>
    )
}

export default Widger