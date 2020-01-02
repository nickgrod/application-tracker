import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import JobsContext from '../context/jobs-context'
import JobOpening from '../components/JobOpening'
const JobsContainer = () => {
    const { jobs } = useContext(JobsContext)

    return(
        <div className = 'column width-100 margin-lg'>
            {
                jobs.length > 0 ? (
                    jobs.map((job) => {
                        return (
                            <JobOpening key = {job.id} job = {job}></JobOpening>
                        )
                    })
                ) : (
                        <p>No jobs to show...</p>
                    )
            }
        </div>
    )

}
export default JobsContainer