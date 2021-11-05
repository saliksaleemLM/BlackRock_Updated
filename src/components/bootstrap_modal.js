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
     
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>        

          <Modal.Header closeButton className=" text-white py-1 header-bg">
            <Modal.Title>Channel ID: {ch}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark ">
            {/* Grpah will appear here */}
            <Graph GD={GD} />


          </Modal.Body>
          <Modal.Footer className="bg-dark d-none">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
       
    </>
      );
}
      export default Example;