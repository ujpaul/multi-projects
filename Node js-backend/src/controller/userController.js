import readFile from "../helper/readxls";
const patient = "../Assets/patient.xlsx";
const physician = "../Assets/physician.xlsx";
const pharmacist = "../Assets/pharmacist.xlsx";
const fetchMedicalData = (req, res) => {
  const { userType } = req.body;
  switch (userType) {
    case "Patient":
      return res.send({ data: readFile(patient) });
    case "Physician":
      return res.send({ data: readFile(physician) });
    case "Pharmacist":
      return res.send({ data: readFile(pharmacist) });
    case "Admin":
      res.send({
        data: {
          patient: readFile(patient),
          pharmacist: readFile(pharmacist),
          physician: readFile(physician),
        },
      });
    default:
      return res.send({
        data: {
          message: "No data for user",
          data: [],
        },
      });
  }
};
export default fetchMedicalData;
