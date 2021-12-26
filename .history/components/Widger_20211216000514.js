import React from 'react'

function Widger() {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='h-[50px] flex justify-center items-center w-full '>
                <input type='text' placeholder='Search Twitter' className='bg-slate-800 p-2 w-full leading-[50px]' />
            </div>
        </div>
    )
}

export default Widger
