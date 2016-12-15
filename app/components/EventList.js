import React, { PropTypes } from 'react'
import EventSummary from './EventSummary'

const EventList = ({ events, onEventClick }) =>
  <ul>
    {events.map(event) => {
      key={event.id}
      {...event}
      onClick=onEventClick
    })}
  </ul>
