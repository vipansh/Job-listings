import React, { useState } from "react";

export const SearchContaxt = React.createContext();

export const SearchContaxtProvider = ({ children }) => {
    const [searchItem, setSearchItem] = useState([])


    return (
        <SearchContaxt.Provider
            value={{
                searchItem, setSearchItem
            }}
        >
            {children}
        </SearchContaxt.Provider>
    );
};