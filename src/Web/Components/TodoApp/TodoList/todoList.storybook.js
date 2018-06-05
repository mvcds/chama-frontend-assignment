import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean } from '@storybook/addon-knobs/react';
import { lorem } from 'faker';

import TodoListFactory from '../../../../Domain/Objects/TodoList/todoList.factory';

import TodoList from './index';

const MIN = 1;

const QUANTITY = {
  min: MIN,
  max: 5,
  range: true
};

const props = {
  onToggle: action('toogle')
}

const todoSeed = lorem.words()

storiesOf('Organisms / Todo List', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const quantity = number('Todos', MIN, QUANTITY)
    const isAsc = boolean('Is ascending?', false);

    const todoList = TodoListFactory.WithRandomizedTodos(quantity)

    todoList.sort = isAsc ? 'asc' : 'desc';

    return (
      <TodoList
        {...props}
        todos={todoList.todos}
      />
    )
  })
