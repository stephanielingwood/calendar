import uuid from 'uuid'

// addEvent
export const addEvent = (startDate, endDate, seriesId) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
    startDate,
    endDate,
    seriesId,
    selected: false
  }
}

// addSeries
export const addSeries = (name, description, notes, location, tags, photo) => {
  return {
    type: 'ADD_SERIES',
    id: uuid.v4(),
    name,
    description,
    notes,
    location,
    tags,
    photo
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
