import React, { useState } from "react";

const EditStudents = () => {
  const myStyle = {
    backgroundColor: "#6075D7",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    paddingLeft: "100px",
    paddingRight: "100px",
  };

  const [inpval, setINP] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });
  
  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  return (
    <div className="container m-1000">
      <div className="h3">Edit Student Form</div>
      <div className="form" style={myStyle}>
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Name</label>
            <input
              onChange={setdata}
              value={inpval.name}
              name="name"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Age</label>
            <input
              onChange={setdata}
              value={inpval.age}
              name="age"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Email</label>
            <input
              onChange={setdata}
              value={inpval.email}
              name="email"
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Phone Number</label>
            <input
              onChange={setdata}
              value={inpval.mobilename}
              name="mobile"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Email</label>
            <input
              onChange={setdata}
              value={inpval.work}
              type="text"
              name="work"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Phone Number</label>
            <input
              onChange={setdata}
              value={inpval.add}
              name="add"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <label>Description</label>
            <input
              onChange={setdata}
              value={inpval.desc}
              type="text"
              name="desc"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mt-md-0 mt-3"></div>
        </div>

        <div className=" my-md-2 my-3" align="right">
          <button type="button" className="btn btn-success mt-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStudents;
