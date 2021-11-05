import { Modal, Button } from "react-bootstrap"
import { useState } from "react";
import Graph from "./graphshow.component"
function Example({ showModal, hideModal, ch, GD }) {
  const [show, setShow] = useState(showModal);

  const handleClose = () => {
    console.log("close click")
    setShow(false)
    hideModal();
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Lauch Graph Here
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>channel ID:{ch}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark ">
          {/* Grpah will appear here */}
          <Graph GD={GD} />


        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;