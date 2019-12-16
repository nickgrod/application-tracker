//results reducer, each result requires a valid application to tie it to
const resultsReducer = (state, action) => {
    switch (action.type) {
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
  export default resultsReducer