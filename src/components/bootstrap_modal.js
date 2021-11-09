import { Modal, Button, Row, Col } from "react-bootstrap"
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios"
// import Zoom from "./zoom"
import "./slider-style.css"
import Graph from "./graphshow.component"
function Example({ ch, hideModal, GD }) {
  const [show, setShow] = useState(true);

  const [zoom, setZoom] = useState(1);

  const handleClose = () => {
    setShow(false);
    hideModal();
    console.log("closeing your modal")

  }
  const handleChange = (e) => {
    let val = e.target.value * 0.01;
    setZoom(e.target.value*0.05);



  }
  useEffect(() => {
    if (show == false) {
      handleClose()
    }
  }, [show])
  return (
    <>


      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={() => { setShow(false) }} >

        <Modal.Header closeButton className=" text-white py-1 header-bg">
          <Modal.Title>Channel ID: {ch}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-dark ">
          <Row>
            <Col lg={11}>
            <div id="zoom-graph" >
              <div className="zoom-col" style={{ transform: `scaleY(${zoom})` }}><Graph GD={GD} /></div></div>
              </Col><Col lg={1}>  <input type="range"  class="form-range" orient="vertical" onChange={handleChange} min="1" max="100" step="5" id="customRange3"></input>
            </Col>
          </Row>





        </Modal.Body>

        {/* <Modal.Footer className="bg-dark d-none">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="zoom-in">Zoom IN</button>

          <button className="zoom-out">Zoom OUT</button>

        </Modal.Footer> */}
      </Modal>

    </>
  );
}
export default Example;