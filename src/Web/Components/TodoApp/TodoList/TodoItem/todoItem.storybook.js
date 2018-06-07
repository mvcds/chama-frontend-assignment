import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { lorem } from 'faker';

import TodoFactory from '../../../../../Domain/Entities/Todo/todo.factory';

import TodoItem from './index';

const props = {
  todo: TodoFactory.Random(),
  onToggle: action('toogle'),
  onKeyDown: action('key down'),
  onChangeText: action('change text'),
  onStartEditingText: action('start editing text'),
  onFinishEditingText: action('finish editing text'),
  onChangDueDate: action('change due date'),
  onStartEditingDueDate: action('start editing due date'),
  onFinishEditingDueDate: action('finish editing due date'),
  onSaveDueDate: action('saving due date')
}

const todoSeed = lorem.words()

storiesOf('Organisms / Todo Item', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div className="todo-list__item">{story()}</div>)
  .add('Default', () => {
    const textTodo = text('To do', todoSeed)
    const isCompleted = boolean('Completed?', false)
    const hasDueDate = boolean('Has due date?', false)

    const todo = hasDueDate ? TodoFactory.WithDueDate() : TodoFactory.WithoutDueDate()

    todo.text = textTodo
    todo.isCompleted = isCompleted

    return (
      <TodoItem
        {...props}
        todo={todo}
      />
    )
  })
  .add('Editing Due Date', () => {
    return (
      <TodoItem
        {...props}
        todo={TodoFactory.WithDueDate()}
        isEditingDueDate
      />
    )
  })
  .add('Editing Text', () => {
    const editedText = text('Edited Text', todoSeed)

    return (
      <TodoItem
        {...props}
        isEditingText
        text={editedText}
      />
    )
  })
