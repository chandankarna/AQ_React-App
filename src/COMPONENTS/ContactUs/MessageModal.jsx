import React from 'react';
import { Modal } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

function MessageModal(props) {
    const { isOpen, onClose, userName } = props;

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="modal"
            unmountOnExit
        >
            <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
                <Modal
                    show={true}
                    onHide={onClose}
                    className={`modal-container ${isOpen ? 'active' : ''}`}
                >
                    <Modal.Body>
                        <div className="modal-content">
                            <h2 className="modal-title">Hello, {userName}!</h2>
                            <p className="modal-text">
                                Thank you for your message. We appreciate your communication.
                            </p>
                            <p className="modal-text">
                                Our team is now actively working on your request and will get back to you as soon as possible.
                            </p>
                            <p className="modal-text">
                                In the meantime, feel free to explore our website to learn more about our services and solutions.
                            </p>
                            <p className="modal-text">
                                Have a wonderful day!
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </CSSTransition>
    );
}

export default MessageModal;
