import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    axios
      .post(
        "http://localhost/reactjs_login_registration_phpmysql/api/register.php",
        info
      )
      .then((res) => {
        if (res.data) {
          alert(res.data);
        }
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1>User Registration Form</h1>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                onChange={changeValue}
                className="form-control"
                id="fname"
                aria-describedby="fnameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                onChange={changeValue}
                className="form-control"
                id="lname"
                aria-describedby="lnameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={changeValue}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={changeValue}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
