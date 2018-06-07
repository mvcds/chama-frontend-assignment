import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, date as dateKnob } from '@storybook/addon-knobs/react';
import moment from 'moment';
import { linkTo } from '@storybook/addon-links';

import FormattedDate from './index';

const props = {
  onClose: action('closing'),
  onChange: action('changing'),
  onClean: linkTo('Molecules / FormattedDate', 'No date')
}

const dateSeed = new Date()

storiesOf('Atoms / Formatted Date', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const date = dateKnob('Date', dateSeed)

    const formatedDate = moment(date)

    return (
      <FormattedDate
        {...props}
        date={formatedDate}
      />
    )
  })
  .add('Empty', () => {
    const emptyDateMessage = text('Empty message', FormattedDate.defaultProps.emptyDateMessage)

    return (
      <FormattedDate
        {...props}
        emptyDateMessage={emptyDateMessage}
      />
    )
  })
