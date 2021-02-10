import React from 'react'
import { MainList } from './MainList'
import { SearchBar } from './SearchBar'
import { SearchContaxtProvider } from './SearchContaxt'

export const HomePage = () => {
    return (
        <SearchContaxtProvider>
            <div className="header"></div>
            <div className="container">
                <SearchBar />
                <MainList />
            </div>
        </SearchContaxtProvider>
    )
}
