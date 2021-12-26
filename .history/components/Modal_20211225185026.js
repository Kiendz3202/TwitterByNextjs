import React from 'react'
import reactDom from 'react-dom'
import { useState, useEffect } from 'react'

function Modal({ show, close, children }) {
    cosnt modalContent = show ? (
        <div className='bg-'>
            <div>
                <button>close</button>
                <div>{children}</div>
            </div>
        </div>
    )
    return (
        <div className='relative top-0 left-0 bg-black opacity-80 z-60 w-[300px] h-[300px]'>
            <p className='text-yellow-400'>123dghfssssssssssssssssf</p>
        </div>
    )
}

export default Modal
