//reducer for applications, adds and filters submitted applications
const appsReducer = (state, action) => {
    switch (action.type) {
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
  export default appsReducer