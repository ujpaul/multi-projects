import React, { useEffect, useState } from "react";
import axios from "axios";
const Patient = () => {
  const [patientData, setPatientData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const fetchData = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:5000/fetch-medical-data",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        userType: "Patient",
        authenticated: "authenticated",
      }),
    });
    setPatientData(res.data.data);
    setHeaders(Object.keys(res.data.data[0]));
  };
  useEffect(() => {
    fetchData();
    //setHeaders(Object.keys(patientData[0]));
  }, []);
  return (
    <div className="table-container">
      <h1>Patient Illness 2000-2002</h1>
      <table border={0} className="table">
        <thead>
          <tr>
            <td>{headers[0]}</td>
            <td>{headers[1]}</td>
            <td>{headers[2]}</td>
          </tr>
        </thead>
        <tbody>
          {patientData &&
            patientData.map((data) => (
              <tr keys={data["2000"]}>
                <td>{data["2000"]}</td>
                <td>{data["2001"]}</td>
                <td>{data["2002"]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Patient;
