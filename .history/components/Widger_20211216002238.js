import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Widger() {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='h-[50px] flex items-center justify-start mt-[5px] items-center w-full bg-slate-800 rounded-full '>
                <SearchIcon className='text-white ml-2' />
                <input type='text' placeholder='Search Twitter' className=' text-lg bg-transparent w-[250px] ml-3  outline-none' />
            </div>
            <div className='h-[512px] bg-slate-800 w-full mt-3 rounded-2xl'>

            </div>
        </div>
    )
}

export default Widger
