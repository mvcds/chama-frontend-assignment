import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean } from '@storybook/addon-knobs/react';
import { lorem } from 'faker';

import TodoListFactory from '../../../Domain/Objects/TodoList/todoList.factory';

import TodoList from './index';

const MIN = 0;
const MAX = 5;

const COMPLETED = {
  min: MIN,
  max: MAX,
  range: true
};
const TOTAL = {
  min: 1,
  max: 3,
  range: true
};

const props = {
  total: MAX,
  onToggle: action('sort'),
  onClear: action('clear')
}

const todoSeed = lorem.words()

storiesOf('Organisms / Todo List Footer', module)
  .addDecorator(withKnobs)
  .add('Loose Total', () => {
    const total = number('Total', 1, TOTAL);

    return (
      <TodoList
        {...props}
        completed={0}
        total={total}
      />
    )
  })
  .add('Fixed Total', () => {
    const completed = number('Completed', MIN, COMPLETED);
    const isAsc = boolean('Is ascending?', false);

    return (
      <TodoList
        {...props}
        completed={completed}
        isAsc={isAsc}
      />
    )
  })
