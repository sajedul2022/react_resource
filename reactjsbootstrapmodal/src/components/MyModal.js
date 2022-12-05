import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

export default function MyModal() {
  const [info, setInfo] = useState({
    modal: false,
    name: "",
    city: "",
  });

  function toggle() {
    setInfo({ modal: !info.modal });
  }

  //   submit prevent
  function handleSubmit(event) {
    event.preventDefault();
    console.log(info);
    toggle();
    dataSubmit();
  }

  // form change value
  function changeValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  //   send data to database

  function dataSubmit() {
    axios.post(
      "http://localhost/react_resource/reactjsbootstrapmodal/api/post.php",
      { info }
      
    ).then((res)=>{
        alert(res.data.msg);
    }

    )
  }

  // forntend content return
  return (
    <div>
      <h1>My Modal Button</h1>
      <button onClick={toggle}>Click Here</button>

      <Modal isOpen={info.modal}>
        <ModalHeader> Hello, This is modal </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={changeValue}
              className="form-control"
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              onChange={changeValue}
              className="form-control"
            />

            <input
              type="submit"
              name="submit"
              className="btn btn-info"
              value="Submit"
            />
            <Button onClick={toggle}>Close</Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
