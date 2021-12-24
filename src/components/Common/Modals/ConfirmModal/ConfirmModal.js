import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({
  showModal,
  closeConfirmHandler,
  continueConfirmationHandler,
}) => {
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
      ></Modal>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to continue?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={closeConfirmHandler}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={continueConfirmationHandler}>
            Add to Shopping Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
