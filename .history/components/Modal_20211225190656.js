import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

function Modal({ show, close, children }) {
    const [isBrowser, setIsBrowser] = useState(false)

    const handlerClose = (e) => {
        e.preventDefault();
        close()
    }

    useEffect(() => {
        setIsBrowser(true)
    }, [])
    const modalContent = show ? (
        <div className='bg-black opacity-40 w-full h-full z-40'>
            <div className='w-[300px] h-[300px] bg-white text-black z-50'>
                <button onClick={handlerClose}>close</button>
                <div className='z-50'>{children}</div>
            </div>
        </div>
    ) : null;
    if (isBrowser) {
        return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))
    } else {
        return null
    }
}

export default Modal
