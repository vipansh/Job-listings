import React from 'react'
import data from "../data";
import { JobsList } from './JobsList';
export const MainList = () => {


    const [dataList] = React.useState(data)




    return (
        <div className="jobs">
            {dataList.map((data, i) => {
                return <JobsList jobData={data} key={i} />
            })}
        </div>
    )
}
