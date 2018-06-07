import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, date as dateKnob, boolean } from '@storybook/addon-knobs/react';
import moment from 'moment';
import { linkTo } from '@storybook/addon-links';

import Calendar from './index';

const dateSeed = new Date()

const props = {
  original: moment(dateSeed).unix(),
  onClose: action('closing'),
  onChange: action('changing'),
  onClear: linkTo('Molecules / Calendar', 'No date'),
  onSave: action('saving'),
  onReset: action('reseting')
}

storiesOf('Molecules / Calendar', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const title = text('Title', 'Calendar')
    const date = dateKnob('Date', dateSeed)
    const isSame = boolean('Is same?', false)

    const formatedDate = moment(date).startOf('day')

    return (
      <Calendar
        {...props}
        title={title}
        date={formatedDate}
        isSame={isSame}
      />
    )
  })
  .add('No date', () => {
    const title = text('Title', 'Calendar')
    const emptyDateMessage = text('Empty', 'No Date')
    const isSame = boolean('Is same?', false)

    return (
      <Calendar
        {...props}
        title={title}
        emptyDateMessage={emptyDateMessage}
        isSame={isSame}
      />
    )
  })
