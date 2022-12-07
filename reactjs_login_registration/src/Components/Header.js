import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div class="container">
      <div class="row">
        <div class="p-5 bg-primary text-white text-center">
          <h1>Login / Registration</h1>
          <p>React One page Website!</p>
        </div>

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
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
          </div>
        </nav>
      </div>
    </div>
  );
}
