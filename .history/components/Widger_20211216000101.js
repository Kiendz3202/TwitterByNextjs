import React from 'react'

function Widger() {
    return (
        <div className='hidden lg:flex flex-col items-center w-[400px]  pl-[68px]' >
            <div className='h-[50px] m-auto'>
                <input type='text' placeholder='Search Twitter' />
            </div>
        </div>
    )
}

export default Widger
