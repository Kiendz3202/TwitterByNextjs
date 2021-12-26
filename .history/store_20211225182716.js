import React, { useState } from "react";

const AppContext = React.createContext({

})

export const Provider = (props) => {
    const [isLiked, setIsLiked] = useState(true)
    const [isOpened, setIsOpened] = useState(false)


    function like() {
        setIsLiked(prev => !prev)
        console.log("liked")
    }
    function open() {
        setIsOpened(true)
    }

    const value = {
        like,
        isLiked,
        isOpened
    }
    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export default AppContext