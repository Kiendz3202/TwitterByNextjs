import React, { useState } from "react";

const AppContext = React.createContext({

})

export const Provider = (props) => {
    const [isLiked, setIsLiked] = useState(true)
    const [isOpened, setIsOpened] = useState(false)
    const [postId, setPostId] = useState("")


    function like() {
        setIsLiked(prev => !prev)
    }
    function open() {
        setIsOpened(true)
    }
    function close() {
        setIsOpened(false)
    }
    function handlerPostId(id) {
        setPostId(id)
    }

    const value = {
        like,
        open,
        close,
        handlerPostId,
        isLiked,
        isOpened,
        postId,
    }
    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export default AppContext