import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "react-bootstrap";

function PopUpModel(props) {
  const [modalShow, setModalShow] = useState(props.open || false);
  useEffect(()=>{
    setModalShow(props.open)
  },[props.open])
  
  const handleClose = () => {setModalShow(false);props.close()};

  return (
    <div className="modal position-relative">
      <Modal
        show={modalShow}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`mainModal ${props.className}`}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={props.bodyClass}>{props.children}</Modal.Body>
      </Modal>
    </div>
  );
}
export default PopUpModel;
