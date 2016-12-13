// listens to addEvent action; adds new event to the store

const event = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_EVENT':
      return {
        id: action.id,
        startDate: action.startDate,
        endDate: action.endDate,
        seriesId: action.seriesId
      }
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
