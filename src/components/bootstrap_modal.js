import { Modal, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";

import axios from "axios"

import "./slider-style.css"
import Graph from "./graphshow.component"
function Example({handleGD, hideModal, GD, showModal }) {
  // console.log(GD.length)
  const [show, setShow] = useState(showModal);
  const [ch, setCh] = useState(-1);

  const [zoom, setZoom] = useState(50);
  const handleChannelId = () => {
    axios.get("http://192.168.70.8:3000/getChannelId").then((res) => {
      const getCh = res.data.chan
      setCh(getCh);

    }).catch((err) => {

    })
  }

  const handleClose = () => {
    axios.get("http://192.168.70.8:3000/closeclient").then((response) => {
      hideModal();
      setShow(false);
      console.log(response)
      

    }).catch((err) => {
      console.log(err)

    })
    



  }
  useEffect(() => {
    handleChannelId();
    // return(()=>{});
  }, [GD])
  return (
    <>
{
ch>0?          <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered show={show} onHide={handleClose}  >
            <Modal.Header closeButton className=" text-dark py-1 header-bg bg-light">
              <Modal.Title>Channel ID: {ch}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="p-0" style={{ backgroundColor: "#062F2E" }}>
              <Row>
                <Col lg={11} className="p-2">
                  <div id="zoom-graph" style={{ backgroundColor: "black", width: "730px", height: "400px", border: "1px solid white" }}>
                    <Graph GD={GD} zoom={zoom} /></div>

                </Col>



                <Col lg={1}><div class="slidecontainer">
                  <input type="range" min={-251} max={251} value={zoom} onChange={(e) => setZoom(e.target.value)} step={25} class="slider" id="myRange" />

                </div></Col>
              </Row>
            </Modal.Body>
          </Modal>
:<></>}      
    </>
  );
}
export default Example;



{/* 
                <Col lg={1} style={{ padding: "30px" }}>
                  <input className="pl-3" type="range" value={zoom} class="form-range" orient="vertical" onChange={(e)=>setZoom(e.target.value)} min={-251} max={251} step={25} id="customRange3"></input>



                </Col> */}