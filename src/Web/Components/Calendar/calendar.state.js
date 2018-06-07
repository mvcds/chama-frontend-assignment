import React, { Component } from 'react';
import moment from 'moment';

import Calendar from './index';

function change (date) {
  this.setState({ date });
}

function close () {
  this.props.onClose();
}

function save () {
  this.props.onSave(this.state.date);
  this.props.onClose();
}

class CalendarState extends Component {
  constructor (props) {
    super(props);

    this.state = {
      date: props.date
    }

    this.methods = {
      onClear: change.bind(this, undefined),
      onChange: change.bind(this),
      onClose: close.bind(this),
      onSave: save.bind(this),
      onReset: change.bind(this, props.date)
    }
  }

  get isSame () {
    if (!this.props.date || !this.state.date) return this.props.date === this.state.date;

    const original = moment(this.props.date).startOf('day');
    const changed = moment(this.state.date).startOf('day');

    return original.diff(changed, 'days') === 0;
  }

  render () {
    return (
      <Calendar
        {...this.props}
        {...this.state}
        {...this.methods}
        isSame={this.isSame}
        original={this.props.date}
      />
    )
  }
}

export default CalendarState;
