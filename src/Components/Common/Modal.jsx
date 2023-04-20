import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ImageModal({ show, onHide, src }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Project Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={src} alt="project" style={{ maxWidth: '100%' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;