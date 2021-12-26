import React, { useState } from "react";

const AppContext = React.createContext({

})

export const Provider = (props) => {
    const [isLiked, setIsLiked] = useState(true)


    function like() {
        setIsLiked(prev => !prev)
    }

    const value = {
        like,
        isLiked,
    }
    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export default AppContext