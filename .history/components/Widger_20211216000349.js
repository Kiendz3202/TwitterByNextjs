import React from 'react'

function Widger() {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='h-[50px] flex justify-center items-center '>
                <input type='text' placeholder='Search Twitter' className='bg-slate-700' />
            </div>
        </div>
    )
}

export default Widger
