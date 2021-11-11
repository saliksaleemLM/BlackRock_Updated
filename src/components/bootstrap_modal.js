import { Modal, Button, Row, Col } from "react-bootstrap"
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios"
// import Zoom from "./zoom"
import "./slider-style.css"
import Graph from "./graphshow.component"
function Example({ hideModal, GD, showModal }) {
  const [show, setShow] = useState(showModal);
  const [ch, setCh] = useState(-1);

  const [zoom, setZoom] = useState(1);
  const handleChannelId = () => {
    axios.get("http://localhost:3000/getChannelId").then((res) => {
      const getCh = res.data.chan
      setCh(getCh);

    }).catch((err) => {
      console.log(err.response)
    })
  }
  
  const handleClose = () => {
    axios.post("http://localhost:3000/closeclient",{chan:-1}).then((response) => {
      
      console.log(response)

    }).catch((err) => {
      console.log(err)

    })
    hideModal();
    setShow(false);



  }
  useEffect(() => {
    handleChannelId();
    
    
  }, [GD])
  return (
    <>
    
    {
      ch>0?
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered show={show} onHide={handleClose}  >

        <Modal.Header closeButton className=" text-white py-1 header-bg">
          <Modal.Title>Channel ID: {ch}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-dark ">
          <Row>
            <Col lg={11}>
              <div id="zoom-graph" >
                <div className="zoom-col" ><Graph GD={GD} zoom={zoom} /></div></div>
            </Col><Col lg={1}>  <input type="range" class="form-range" orient="vertical" onChange={(e)=>setZoom(e.target.value)} min="1" max="100" step="5" id="customRange3"></input>
            </Col>

          </Row>





        </Modal.Body>
      </Modal>
  :<></>}
    </>
  );
}
export default Example;