import React from 'react'
import { SearchContaxt } from './SearchContaxt'


const AllTags = ({ tag }) => {
    const { searchItem, setSearchItem } = React.useContext(SearchContaxt)

    const [activeClass, setactiveClass] = React.useState(false)


    React.useEffect(() => {

        let alreadyExist = searchItem.find(element => element === tag)

        if (alreadyExist) {

            setactiveClass(true)
        }
        else {
            setactiveClass(false)

        }
    }, [searchItem, tag])



    function searchbaritem(item) {
        let alreadyExist = searchItem.find(element => element === item)

        if (alreadyExist) {
            let removedItem = searchItem.filter(element => element !== item)
            setSearchItem(removedItem)
            setactiveClass(false)
        }
        else {
            setactiveClass(true)
            setSearchItem((searchItem) => {
                return [...searchItem, item]
            })
        }
    }
    return (
        <span className={`tag ${activeClass ? "tag-active" : ""} `} onClick={() => searchbaritem(tag)}>{tag} </span>
    )
}



export const JobTags = ({ tags }) => {




    return (
        <div>
            {tags.map((tag, i) => {
                return <AllTags tag={tag} key={i} />
            })}

        </div>
    )
}


