import React, { useState } from "react";
const Check = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
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
      </div>
    </div>
  );
};
export default Check;
