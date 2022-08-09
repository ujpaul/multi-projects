import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Styles.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  let formRef = useRef();
  useEffect(() => {
    if (isSubmitted) {
      formRef.current?.reset();
    }
  }, [isSubmitted]);
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    const credentials = {
      username,
      userPassword: password,
    };
    if (typeof userPassword !== Number) {
      setError("Password should be numbers");
      setShowError(true);
      formRef.current?.reset();
    }
    // }else{
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/java-challenge/Signin",
        data: JSON.stringify(credentials),
        headers: { "Content-Type": "text/plain" },
      });
      if (res.data === "Incorrect Username or Password") {
        setIsSubmitted(true);
        setError(res.data);
        setShowError(true);
      }
      if (res) {
        res.data === "admin"
          ? navigate("/admin")
          : res.data === "patient"
          ? navigate("/patient")
          : res.data === "physician"
          ? navigate("/physician")
          : res.data === "Pharmacist"
          ? navigate("/pharmacist")
          : navigate("/login");
      }
    
  };

  return (
    <div className="container">
      {showError ? (
        <span style={{ color: "red", fontSize: 20 }}>{error}</span>
      ) : (
        <></>
      )}
      <div className="form_container">
        <div className="title">
          <h2>Login Form</h2>
        </div>

        <form ref={formRef} className="forms">
          <div className="grid-col-2">
            <span>
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              onKeyUp={() => setShowError(false)}
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
              onKeyUp={() => setShowError(false)}
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
