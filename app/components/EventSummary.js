// an event showing in the EventList view

import React, { PropTypes } from 'react'

const EventSummary = ({onClick, selected, name, startDate, endDate, description}) =>
  <li
    onClick={onClick}
  >
    <h3>{name}</h3>
    <p>{startDate} - {endDate}</p>
    <p>{description}</p>
  </li>

const propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Object.assign(EventSummary, propTypes)
