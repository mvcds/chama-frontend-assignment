import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { lorem, random } from 'faker';

import TodoItem from './index';

const MIN = 1;

const QUANTITY = {
  min: MIN,
  max: 5,
  range: true
};

const props = {
  onToggle: action('toogle'),
  onKeyDown: action('key down'),
  onChangeText: action('change text'),
  onUpdate: action('updating todo'),
  onOpenEditing: action('open editing'),
  onCloseEditing: action('close modal')
}

const todoSeed = lorem.words()

storiesOf('Organisms / Todo Item', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div className="todo-list__item">{story()}</div>)
  .add('Default', () => {
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
  }).add('Editing', () => {
    const editedText = text('Edited', todoSeed)

    const todo = {
      text: lorem.words(),
      isCompleted: random.boolean(),
      priority: random.number()
    }

    return (
      <TodoItem
        {...props}
        todo={todo}
        isEditing
        text={editedText}
      />
    )
  })
