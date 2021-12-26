import React from 'react'
import ReactDom from 'react-dom'
import { useState, useEffect } from 'react'

function Modal({ show, close, children }) {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])
    const modalContent = show ? (
        <div className='bg-black opacity-70 w-full h-full z-40'>
            <div className='w-[300px] h-[300px] bg-white text-black'>
                <button onClick={() => close()}>close</button>
                <div>{children}</div>
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
