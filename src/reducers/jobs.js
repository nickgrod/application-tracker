const JobsReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_JOBS':
          if(action.pop_jobs !== null && action.pop_jobs.length>0){
              state = action.pop_jobs
              return state
          } else{
              return state
          }
      default:
        return state
    }
  }
export default JobsReducer