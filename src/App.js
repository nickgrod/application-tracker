import React, { useState, useEffect, useReducer }  from 'react';
import DashboardCard from './DashboardCard';
import ApplicationModal from './ApplicationModal';
import AppsContext from './context/applications-context'

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


const App = (props) => {
  const [userName, setUserName] = useState(props.name)
  const [apps, appsDispatch] = useReducer(appsReducer, [])

  const saveIt = (e) => {
    e.preventDefault()
    appsDispatch({type:'ADD_APP', app:{name: document.getElementById('first')}})
  }

  return(
    <div className = 'container'>
    <h1>Application Tracker</h1>
    <div className = 'row dashboard-row'>
    <AppsContext.Provider value = {{ apps}}>
    <DashboardCard/>
    </AppsContext.Provider>
    {/* <DashboardCard/>
      <DashboardCard/> */}
    </div>
    <AppsContext.Provider value = { {apps, appsDispatch} }>
    <ApplicationModal/>
    </AppsContext.Provider>
    </div>
  )
}

App.defaultProps = {
  name: 'John Smith'
}
export default App;
