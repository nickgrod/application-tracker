import React, { useReducer } from 'react';
import DashboardCard from './components/DashboardCard';
import ApplicationModal from './components/ApplicationModal';
import AppsContext from './context/applications-context'
import InterviewsContext from './context/interview-context'
import InterviewCard from './components/InterviewCard'
import ResultsContext from './context/results-context'
import ResultsCard from './components/ResultsCard'
import resultsReducer from './reducers/results'
import appsReducer from './reducers/apps'
import interviewsReducer from './reducers/interviews'
import JobsContext from './context/jobs-context'
import JobsReducer from './reducers/jobs'
import JobsContainer from './components/JobsContainer'

const App = () => {
  const [interviews, interviewsDispatch] = useReducer(interviewsReducer, [])
  const [apps, appsDispatch] = useReducer(appsReducer, [])
  const [results, resultsDispatch] = useReducer(resultsReducer, [])
  const [jobs, jobsDispatch] = useReducer(JobsReducer, [])



  return (
    <div className='container'>
      <h1>Application Tracker</h1>
      <div className='row dashboard-row'>
        <AppsContext.Provider value={{ apps }}>
          <DashboardCard />
        </AppsContext.Provider>
        <InterviewsContext.Provider value={{ interviews }}>
          <InterviewCard />
        </InterviewsContext.Provider>
        <ResultsContext.Provider value={{ results }}>
          <ResultsCard />
        </ResultsContext.Provider>
      </div>
      <ResultsContext.Provider value={{ results, resultsDispatch }}>
        <AppsContext.Provider value={{ apps, appsDispatch }}>
          <InterviewsContext.Provider value={{ interviews, interviewsDispatch }}>
            <ApplicationModal />
          </InterviewsContext.Provider>
        </AppsContext.Provider>
      </ResultsContext.Provider>
      <h2 style={{
        marginLeft: '30px'
      }} className='pacifico white'>Find New Jobs...</h2>
      
        <div className='row flex-grow stop-overflow bg-grey hard-shadow'>
        <JobsContext.Provider value={{ jobs, jobsDispatch }}>
        <JobsContainer>
          </JobsContainer>
          </JobsContext.Provider>
        </div>

    </div>

  )
}

export default App;
