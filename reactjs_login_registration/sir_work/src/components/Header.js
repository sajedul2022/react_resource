import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  //const [auth, setAuth] = useState();
  const [fullname, setFullName] = useState();
  let fullName = localStorage.getItem("fullname");

  // useEffect(() => {
  //   const a = localStorage.getItem("email");
  //   const f = localStorage.getItem("fullname");
  //   setAuth(a);
  //   setFullName(f);
  // }, []);

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  //  console.log(auth);
  // const auth = localStorage.getItem("email");
  // if (auth === null) {
  //   navigate("/login");
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          REACTJS AUTH SYSTEM with PHP-API
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          <span className="navbar-text">{fullName}</span>
          {fullName ? (
            <a
              className="nav-link"
              aria-current="page"
              href=""
              onClick={logOut}
            >
              Logout
            </a>
          ) : (
            <a className="nav-link" aria-current="page" href="/login">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
