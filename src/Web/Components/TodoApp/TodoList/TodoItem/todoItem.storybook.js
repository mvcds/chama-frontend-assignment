import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { lorem } from 'faker';

import TodoItem from './index';

const MIN = 1;

const QUANTITY = {
  min: MIN,
  max: 5,
  range: true
};

const props = {
  onToggle: action('toogle'),
  onStartEditing: action('start editing'),
  onKeyDown: action('key down'),
  onChange: action('change'),
  onExitEditing: action('exit editing')
}

const todoSeed = lorem.words()

storiesOf('Organisms / Todo Item', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div className="todo-list__item">{story()}</div>)
  .add('Static', () => {
    const textTodo = text('To do', todoSeed)
    const isCompleted = boolean('Completed?', false)
    const priority = number('Priority', MIN, QUANTITY)

    const todo = {
      text: textTodo,
      isCompleted,
      priority
    }

    return (
      <TodoItem
        {...props}
        todo={todo}
      />
    )
  })
  .add('Editable', () => {
    const editedTodo = text('Edited', todoSeed)

    return (
      <TodoItem
        {...props}
        isEditing
        editedTodo={editedTodo}
      />
    )
  })
