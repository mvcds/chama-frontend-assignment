import React from 'react';

import './modal.css';

const noop = () => null;

function Dialog (props) {
  const { title, children, onCloseModal, Footer } = props

  return (
    <div className="modal__dialog" role="dialog">
      <header className="modal__header">
        <span className="modal__title">{title}</span>
        <span onClick={onCloseModal} className="modal__close-icon">
          &times;
        </span>
      </header>
      <div className="modal__content">
        {children}
      </div>
      <footer className="modal__footer">
        <Footer onCloseModal={onCloseModal} />
      </footer>
    </div>
  )
}

function Modal (props) {
  const { onCloseModal } = props

  return (
    <div className="modal">
      <div className="modal__background" onClick={onCloseModal} />
      <Dialog {...props} />
    </div>
  )
}

Modal.defaultProps = {
  Footer: noop
}

export default Modal
