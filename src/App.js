import React, { useReducer }  from 'react';
import DashboardCard from './components/DashboardCard';
import ApplicationModal from './components/ApplicationModal';
import AppsContext from './context/applications-context'
import InterviewsContext from './context/interview-context'
import InterviewCard from './components/InterviewCard'
import ResultsContext from './context/results-context'
import ResultsCard from './components/ResultsCard'

//reducer for applications, adds and filters submitted applications
const appsReducer = (state, action) => {
  switch(action.type){
    case 'POPULATE_APPS':
      return action.apps
    case 'ADD_APP':
      return [
        ...state,
        { 
        position: action.app.position,
        company: action.app.company,
        location: action.app.location,
        date: action.app.date
       }
      ]
    default:
      return state
  }
}
//results reducer, each result requires a valid application to tie it to
const resultsReducer = (state, action) => {
  switch(action.type){
    case 'POPULATE_RESULTS':
      return action.results
    case 'SET_RESULT':
      return [
        ...state,
        { 
        position: action.result.position,
        date: action.result.date,
        result: action.result.result
       }
      ]
    default:
      return state
  }
}

//interview reducer, each interview requires a valid application to tie it to
const interviewsReducer = (state, action) => {
  switch(action.type){
    case 'POPULATE_INTERVIEWS':
      return action.interviews
    case 'ADD_INTERVIEW':
      return [
        ...state,
        { 
        position: action.interview.position,
        type: action.interview.type,
        result: action.interview.location,
        date: action.interview.date
       }
      ]
    default:
      return state
  }
}


const App = (props) => {
  const [interviews, interviewsDispatch] = useReducer(interviewsReducer, [])
  const [apps, appsDispatch] = useReducer(appsReducer, [])
  const [results, resultsDispatch] = useReducer(resultsReducer, [])


  return(
    <div className = 'container'>
    <h1>Application Tracker</h1>
    <div className = 'row dashboard-row'>
    <AppsContext.Provider value = {{ apps}}>
    <DashboardCard/>
    </AppsContext.Provider>
      <InterviewsContext.Provider value = {{interviews}}>
      <InterviewCard/>
      </InterviewsContext.Provider>
      <ResultsContext.Provider value = {{results}}>
        <ResultsCard/>
      </ResultsContext.Provider>
    </div>
    <ResultsContext.Provider value = {{results, resultsDispatch}}>
    <AppsContext.Provider value = { {apps, appsDispatch} }>
    <InterviewsContext.Provider value = { {interviews, interviewsDispatch }}>
    <ApplicationModal/>
    </InterviewsContext.Provider>
    </AppsContext.Provider>
    </ResultsContext.Provider>

    </div>
  )
}

// App.defaultProps = {
//   name: 'John Smith'
// }
export default App;
