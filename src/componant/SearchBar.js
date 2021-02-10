import React from 'react'
import { SearchContaxt } from './SearchContaxt'

export const SearchBar = () => {
    const { searchItem, setSearchItem } = React.useContext(SearchContaxt)


    function removeItem(item) {
        let removedItem = searchItem.filter(element => element !== item)
        setSearchItem(removedItem)

    }

    if ((searchItem.length) >= 1) {

        return (
            <div className="search">
                <div className="search-content">
                    {searchItem.map((data, i) => {
                        return (
                            <span key={i} className="close-tag" onClick={() => { removeItem(data) }}>{data}</span>
                        )
                    })}

                </div>

                <span className="search-clear" onClick={() => { setSearchItem([]) }}>
                    Clear
          </span>
            </div>
        )
    }
    else {
        return (<></>)
    }
}
