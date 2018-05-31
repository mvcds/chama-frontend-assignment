import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';
import { lorem } from 'faker';

import TodoList from '../../Domain/Objects/TodoList/todoList.factory';

import App from './index';

const MIN = 1;

const QUANTITY = {
  min: MIN,
  max: 5,
  range: true
};

const props = {
  onKeyDown: action('key down'),
  onChange: action('changes'),
  onToggleAll: action('toggle todos'),
  onToggle: action('toggle an item')
}

const todoSeed = lorem.words()

storiesOf('App', module)
  .addDecorator(withKnobs)
  .add('Empty', () => {
    const todo = text('To do', todoSeed)

    return (
      <App
        {...props}
        todo={todo}
        todoList={TodoList.Empty()}
      />
    )
  })
  .add('Non-done', () => {
    const todo = text('To do', todoSeed)
    const quantity = number('Todos', MIN, QUANTITY)

    return (
      <App
        {...props}
        onToggleAll={linkTo('App', 'Done')}
        todo={todo}
        todoList={TodoList.WithNonDoneTodos(quantity)}
      />
    )
  })
  .add('Done', () => {
    const todo = text('To do', todoSeed)
    const quantity = number('Todos', MIN, QUANTITY)

    return (
      <App
        {...props}
        onToggleAll={linkTo('App', 'Non-done')}
        todo={todo}
        todoList={TodoList.WithAllDoneTodos(quantity)}
      />
    )
  })
