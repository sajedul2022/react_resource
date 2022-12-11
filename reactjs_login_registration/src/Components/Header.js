import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  let navigate = useNavigate();
  // session clear
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  // Not entry Dashboard
  let fullname = sessionStorage.getItem("fullname");
  let setEmail = sessionStorage.getItem("email");
  useEffect(() => {
    if (setEmail == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div class="container">
      <div class="row">
        <div class="p-5 bg-primary text-white text-center">
          <h1>Login / Registration</h1>
          <p>React One page Website!</p>
        </div>

        <nav class="navbar navbar-expand-sm ">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/registration">
                  Registration
                </Link>
              </li>
            </ul>
            <span className="navbar-text"> {setEmail} </span>
            <span>
              {fullname ? (
                <a onClick={logout} class="nav-link">
                  {fullname} | Logout
                </a>
              ) : (
                <a href="/login" class="nav-link">
                  Login
                </a>
              )}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}
