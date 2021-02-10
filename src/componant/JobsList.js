import React from 'react'
import { useState, useEffect } from 'react'
import { JobTags } from './JobTags'
import { SearchContaxt } from './SearchContaxt'
export const JobsList = ({ jobData }) => {
    const [showJobList, setShowJobList] = useState(true)
    const [jobtags] = useState(() => {
        return ([...jobData.tools, ...jobData.languages, jobData.role])
    })

    const { searchItem } = React.useContext(SearchContaxt)


    useEffect(() => {

        if (searchItem.length !== 0) {

            let checker = (arr, target) => target.every(v => arr.includes(v));

            setShowJobList(checker(jobtags, searchItem))
        }
        else {
            setShowJobList(true)
        }

    }, [jobtags, searchItem])


    if (showJobList) {


        return (
            <div className="jobs-item">
                <div className="jobs-column">
                    <img src={jobData.logo} alt={jobData.company} className="jobs-img" />

                    <div className="jobs-info">
                        <div className="jobs-company">{jobData.company} </div>
                        <div className="jobs-title">{jobData.position}</div>

                        <ul className="jobs-details">
                            <li className="jobs-details-item">{jobData.postedAt}</li>
                            <li className="jobs-details-item">{jobData.contract}</li>
                            <li className="jobs-details-item">{jobData.location}</li>
                        </ul>
                    </div>
                </div>
                <div className="jobs-column jobs-column--right">
                    <JobTags tags={jobtags} />
                </div>
            </div >
        )
    }
    else {
        return (<></>)
    }
}
