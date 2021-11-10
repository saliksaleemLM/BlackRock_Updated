import { Modal, Button, Row, Col } from "react-bootstrap"
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios"
// import Zoom from "./zoom"
import "./slider-style.css"
import Graph from "./graphshow.component"
function Example({ ch, hideModal, GD, showModal }) {
  const [show, setShow] = useState(showModal);

  const [zoom, setZoom] = useState(1);

  const handleClose = () => {
    axios.get("http://localhost:3000/closeclient").then((response) => {
      
      console.log(response)

    }).catch((err) => {
      console.log(err)
      
    })
    hideModal();
    setShow(false);



  }
  const handleChange = (e) => {
    let val = e.target.value;
    if (val < 50) {

      setZoom(e.target.value * 2);

    }
    else {
      setZoom(e.target.value * 0.5)
    }


  }
  useEffect(() => {
    if (show == false) {
      handleClose()
    }
  }, [show])
  return (
    <>


      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered show={show} onHide={handleClose}  >

        <Modal.Header closeButton className=" text-white py-1 header-bg">
          <Modal.Title>Channel ID: {ch}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-dark ">
          <Row>
            <Col lg={11}>
              <div id="zoom-graph" >
                <div className="zoom-col" ><Graph GD={GD} zoom={zoom} /></div></div>
            </Col><Col lg={1}>  <input type="range" class="form-range" orient="vertical" onChange={handleChange} min="1" max="100" step="1" id="customRange3"></input>
            </Col>

          </Row>





        </Modal.Body>
      </Modal>

    </>
  );
}
export default Example;