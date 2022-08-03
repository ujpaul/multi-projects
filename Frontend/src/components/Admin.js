import Patient from "./Patient";
import Pharmacist from "./Pharmacist";
import Physician from "./Physician";
const Admin = () => {
  return (
    <>
      <div className="flex">
        <div className="table-width">
          <Patient />
        </div>
        <div className="table-width">
          <Pharmacist />
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Physician />
      </div>
    </>
  );
};
export default Admin;
