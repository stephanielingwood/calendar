// listens to addEvent action; adds new event to the store

// private method
const event = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_EVENT':
      return {
        id: action.id,
        startDate: action.startDate,
        endDate: action.endDate,
        seriesId: action.seriesId
      }

      // public/subscribable method
      // also need to add another add event that takes the created event and adds it to the events array
    case 'TOGGLE_VISIBLE_EVENT':
      return {
        if (state.id !== action.id)
          return Object.assign({}, state, {
            selected: false
          })
        return Object.assign({}, state, {
          selected: true
        })
      }
    default:
      return state
  }
}

const events = (state = [], action) => {

}

return default events
