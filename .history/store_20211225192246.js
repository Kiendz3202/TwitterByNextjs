import React, { useState } from "react";

const AppContext = React.createContext({

})

export const Provider = (props) => {
    const [isLiked, setIsLiked] = useState(true)
    const [isOpened, setIsOpened] = useState(true)


    function like() {
        setIsLiked(prev => !prev)
    }
    function open() {
        setIsOpened(true)
    }
    function close() {
        setIsOpened(false)
    }

    const value = {
        like,
        open,
        close,
        isLiked,
        isOpened,
    }
    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export default AppContext