import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Styles.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const response = "Admin";
  const submitHandler = async (e) => {
    e.preventDefault();
    const credentials = {
      username,
      userPassword: password,
    };
    const res = await axios({
      method: "POST",
      url: "http://localhost:8080/java-challenge/Signin",
      data: JSON.stringify(credentials),
      headers: { "Content-Type": "text/plain" },
    });
    console.log(response);
    if (res) {
      res.data === "admin"
        ? navigate("/admin")
        : res.data === "patient"
        ? navigate("/patient")
        : res.data === "physician"
        ? navigate("/physician")
        : res.data === "pharmacist"
        ? navigate("/pharmacist")
        : navigate("/login");
    }
  };
  return (
    <div className="container">
      <div className="form_container">
        <div className="title">
          <h2>Login Form</h2>
        </div>

        <form className="forms">
          <div className="grid-col-2">
            <span>
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid-col-2">
            <span>
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            className="btn"
            type="submit"
            value="Login"
            onClick={submitHandler}
          />
        </form>
        <span>No account yet? </span>
        <Link to="/">Sign Up Here</Link>
      </div>
    </div>
  );
};

export default Signin;
