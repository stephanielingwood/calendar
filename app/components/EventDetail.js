// an event showing in the detail pane - includes all props for that event, and a list of summaries for other events in the series
// takes a detailed event, and a list of event summaries

import React, { PropTypes } from 'react'

const EventSummary = ({event}) =>
  <div>
    <h2>Selected Event Info:</h2>
    <h3>{event.name}</h3>
    <p>{event.startDate} - {event.endDate}</p>
    <p>{event.description}</p>
    <p>Notes: {event.notes}</p>
    <p>Location: {event.location}</p>
    <p>Tags: {event.tags}</p>
  </div>

const propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Object.assign(EventSummary, propTypes)
