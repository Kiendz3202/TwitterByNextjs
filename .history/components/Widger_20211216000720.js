import React from 'react'

function Widger() {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='h-[60px] flex justify-center items-center w-full '>
                <input type='text' placeholder='Search Twitter' className='bg-slate-800 p-3 flex items-center w-full rounded-full' />
            </div>
        </div>
    )
}

export default Widger
