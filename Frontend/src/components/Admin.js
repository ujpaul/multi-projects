import React, { useEffect, useState } from "react";
import axios from "axios";
import Patient from "./Patient";
import Pharmacist from "./Pharmacist"
import Physician from "./Physician"
const Admin = () => {
  // const [patientData, setPatientData] = useState([]);
  // const [headers, setHeaders] = useState([]);
  // useEffect(async () => {
  //   const res = await axios({
  //     method: "POST",
  //     url: "http://localhost:5000/fetch-medical-data",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify({
  //       userType: "Admin",
  //       authenticated: "authenticated",
  //     }),
  //   });
  //   setPatientData(res.data);
  //   setHeaders = Object.keys(patientData);
  // }, []);
  // console.log("Headers:", headers);
  return (
    <>
      <div className="flex">
      <div className="table-width">
        <Patient/>
      </div>
      <div className="table-width">
      <Pharmacist/>
      </div>
      
    </div>
      <Physician/>
    </>

  );
};
export default Admin;
