import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import ToggleAllTodos from './index';

const props = {
  onToggleAll: action('toogle all')
}

storiesOf('Organisms / Toggle All Todos', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const isCompleted = boolean('Complete?', false)

    return (
      <ToggleAllTodos
        {...props}
        hasTodos
        isCompleted={isCompleted}
      />
    )
  })
