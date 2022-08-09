import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles.css";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error,setError] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dataToSend = {
    fname: fname,
    lname: lname,
    age: age,
    username: username,
    phoneNumber: phoneNumber,
    userType: userType,
    gender: gender,
    userPassword: password,
    confirmPassword: confirmPassword,
  };
  let formRef = useRef();
  useEffect(() => {
    if (showError) {
      formRef.current?.reset();
    }
  }, [showError]);
  const signupHandler = async (e) => {
    e.preventDefault();
    setShowError(false)
    
    if(userType === "admin" && password.length !== 8){
      setError("Password should be 8 numbers for this user");
      setShowError(true);
    }else if(userType === "patient" && password.length !== 7){
      setError("Password should be 7 numbers for this user");
      setShowError(true);
    }else if(userType === "physician" && password.length !== 6){
      setError("Password should be 6 numbers for this user");
      setShowError(true);
    }else if(userType === "pharmacist" && password.length !== 5){
      setError("Password should be 5 numbers for this user");
      setShowError(true);
    }else if(password !== confirmPassword){
      setError("Password not match");
      setShowError(true)
    }
    // else if(typeof password != Number || typeof confirmPassword != Number){
    //   setError("Password should be numbers");
    //   setShowError(true)
    // }
    else {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/java-challenge/Signup",
        data: JSON.stringify(dataToSend),
        headers: { "Content-Type": "text/plain" },
      });
      if (response.status === 200) {
        navigate("/login");
      }else{
        setError(response.data);
        showError(true)
      }
    }
    
  };

  return (
    <div className="container">
      <form ref={formRef}>
        {showError ? <span style={{color: 'red'}}>{error}</span> : <></>}
        <div className="grid-col-2">
          <span>
            {" "}
            <i aria-hidden="true" className="fa fa-user"></i>{" "}
          </span>
          <input
            autocomplete="off"
            type="text"
            name="fname"
            required
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />
        </div>
        <div className="grid-col-2">
          <span>
            {" "}
            <i aria-hidden="true" className="fa fa-user"></i>{" "}
          </span>
          <input
            autocomplete="off"
            type="text"
            name="lname"
            required
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />
        </div>
        <div className="grid-col-2">
          <span>
            <i aria-hidden="true" className="fa fa-mobile "></i>
          </span>
          <input
            autocomplete="off"
            type="number"
            placeholder="phone Number"
            name="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />
        </div>
        <div className="grid-col-2">
          <span>
            <i className="fa fa-user"></i>
          </span>
          <input
            autocomplete="off"
            type="number"
            placeholder="age"
            name="age"
            required
            onChange={(e) => setAge(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />
        </div>
        <div className="grid-col-2">
          <span>
            <i className="fa fa-user"></i>
          </span>
          <input
            autocomplete="off"
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />
        </div>

        <div className="grid-col-2">
          <span>
            <i aria-hidden="true" className="fa fa-lock"></i>
          </span>
          <input
            autocomplete="off"
            type="password"
            id="usr_password"
            placeholder="password"
            name="user_password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />
        </div>

        <div className="grid-col-2">
          <span>
            <i aria-hidden="true" className="fa fa-lock"></i>
          </span>
          <input
            autocomplete="off"
            type="password"
            name="retype_password"
            id="conf_password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />
        </div>
        <div className="input-container mt">
          <input
            autocomplete="off"
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={(e) => setGender(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />{" "}
          <label for="male">Male</label>
          <input
            autocomplete="off"
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={(e) => setGender(e.target.value)}
            onKeyUp={()=>setShowError(false)}
          />{" "}
          <label for="female">Female</label>
        </div>
        <div className="input-container">
          <select
            id="role"
            name="roles"
            onChange={(e) => {
              console.log(e.target.value);
              setUserType(e.target.value);
              setShowError(false);
            }}
          >
            <option>Select User Role</option>
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
            <option value="physician">Physician</option>
            <option value="Pharmacist">Pharmacist</option>
          </select>
        </div>
        <div className="checkboxes">
          <input type="checkbox" id="terms" />
          <label for="terms"> I agree with terms and conditions</label> <br />
          <input type="checkbox" id="newsletter" style={{ marginLeft: -35 }} />
          <label for="newsletter"> I want to receive newsletter </label>
        </div>
        <div>
          <input
            className="btn"
            type="submit"
            value="Register"
            onClick={signupHandler}
          />
        </div>
      </form>
      <span>Already have account?</span>
      <Link to="/login">Login Instead</Link>
    </div>
  );
};
export default Signup;
