import React, { useState } from "react";
import PropTypes from "prop-types";

// Token set
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


//  Token get 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="container">
      <h1 className="bg-primary  " style={{ textAlign: "center" }}>
        Login Form{" "}
      </h1>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// use prop type
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
