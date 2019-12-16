//interview reducer, each interview requires a valid application to tie it to
const interviewsReducer = (state, action) => {
    switch (action.type) {
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
export default interviewsReducer  