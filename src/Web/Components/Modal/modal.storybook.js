import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { lorem } from 'faker';

import Modal from './index';

const props = {
  onCloseModal: action('close modal'),
  Footer: ({ onCloseModal }) => {
    return (
      <button onClick={onCloseModal}>
        Close From Footer
      </button>
    )
  }
}

const titleSeed = lorem.words()

storiesOf('Molecules / Modal', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const title = text('Title', titleSeed)

    return (
      <Modal {...props} title={title}>
        <p>{lorem.paragraph()}</p>
        <p>{lorem.paragraph()}</p>
      </Modal>
    )
  })
