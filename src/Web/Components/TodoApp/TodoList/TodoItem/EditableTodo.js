import React from 'react';

import Modal from '../../../Modal';

function footer ({ text, onUpdate }) {
  return ({ onCloseModal }) => (
    <React.Fragment>
      <button onClick={onCloseModal}>
        Close
      </button>
      <button
        onClick={onUpdate}
        disabled={!text.length}
      >
        Update
      </button>
    </React.Fragment>
  )
}

function EditableTodo ({ text, onKeyDown, onChangeText, onCloseEditing, ...buttons }) {
  return (
    <Modal
      title="Edit"
      Footer={footer({ text, ...buttons })}
      onCloseModal={onCloseEditing}
    >
      <input
        className="todo-list__input"
        placeholder="Text"
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChangeText}
        autoFocus
      />
    </Modal>
  )
}

export default EditableTodo;
