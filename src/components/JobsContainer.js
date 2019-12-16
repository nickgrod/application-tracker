import React, { useContext, useEffect } from 'react'
import JobsContext from '../context/jobs-context'
import axios from 'axios'
const JobsContainer = () => {
    const { jobs, jobsDispatch } = useContext(JobsContext)

    const getJobs = async() => {
        const response = await axios.get('https://github-jobs-proxy.appspot.com/positions?description=javascript&location=san+francisco');
        const pop_jobs = response.data;
        jobsDispatch({type:'POPULATE_JOBS', pop_jobs})
      }
      getJobs()
    useEffect(()=>{
        console.log('Jobs changed')
        console.log(jobs)
    }, [jobs])
    return (
        <div>
            {
                jobs.length > 0 ? (
                    jobs.map((job) => {
                        return (
                            <div>{job.type}</div>
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