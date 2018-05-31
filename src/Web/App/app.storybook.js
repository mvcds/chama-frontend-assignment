import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { lorem } from 'faker';

import App from './index';

const props = {
  onKeyDown: action('key down'),
  onChange: action('changes'),
}

const todoSeed = lorem.words()

storiesOf('App', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const todo = text('To do', todoSeed)

    return (
      <App
        {...props}
        todo={todo}
      />
    )
  });
