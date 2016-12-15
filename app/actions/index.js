import uuid from 'uuid'
// can handle assigning hard-coded values or defaults either in the action or the reducer

// addEvent
export const addEvent = (name, startDate, endDate, description, notes, location, tags, photo, selected) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
    name,
    startDate,
    endDate,
    description,
    notes,
    location,
    tags: tags || [],
    photo: photo || '',
    selected: false
  }
}

// setEventListFilter
export const setEventListFilter = (filter) => {
  return: {
    type: 'SET_EVENT_LIST_FILTER',
    filter
  }
}

// toggleVisibleEvent
export const toggleVisibleEvent = (id) => {
  return {
    type: 'TOGGLE_VISIBLE_EVENT',
    id
  }
}
