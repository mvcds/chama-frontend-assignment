import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { lorem } from 'faker';

import NewTodo from './index';

const props = {
  onKeyDown: action('key down'),
  onChange: action('changes')
}

const todoSeed = lorem.words()

storiesOf('Organisms / New Todo', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const todo = text('To do', todoSeed)

    return (
      <NewTodo
        {...props}
        text={todo}
      />
    )
  })
