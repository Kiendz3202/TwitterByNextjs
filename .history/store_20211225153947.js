import React from "react";

export default const AppCotext = React.createContext({

})

export const Provider = (props) => {

    const value = {}
    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}