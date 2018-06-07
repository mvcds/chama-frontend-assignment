import React from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';

import FormattedDate from '../FormattedDate';

import './calendar.css';

function Dialog (props) {
  const {
    title, date, emptyDateMessage, isSame, original,
    onClose, onChange, onClear, onSave, onReset
  } = props

  return (
    <div className="calendar__dialog" role="dialog">
      <header className="calendar__header">
        <span className="calendar__title">
          {title}
        </span>
        <span onClick={onClose} className="calendar__close-icon">
          &times;
        </span>
      </header>
      <div className="calendar__content">
        <div className="calendar__content-header">
          <button onClick={onClear} disabled={!date}>
            Clear Date
          </button>
          <button onClick={onReset} disabled={isSame}>
            Reset to <FormattedDate date={original} emptyDateMessage="no date" />
          </button>
        </div>
        <ReactCalendar
          date={date}
          locale="en-US"
          firstMonth={1}
          weekNumbers
          onChange={onChange}
        />
      </div>
      <button
        onClick={onSave}
        disabled={isSame}
      >
        Save Change
      </button>
    </div>
  )
}

function Calendar (props) {
  const { onClose } = props

  return (
    <div className="calendar">
      <div className="calendar__background" onClick={onClose} />
      <Dialog {...props} />
    </div>
  )
}

export default Calendar;
