import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = ({showModal, closeHandler, deleteHandler}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [showModal]);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header onClick={closeHandler}>
          <Modal.Title>Delete entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This will permanently delete the entry. Would you like to delete it
          anyways.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeHandler}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteHandler}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
