import React from "react";
import Logo from "../component/Logo";
import user from "../assets/user.png";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-success px-3 py-2 d-flex justify-content-between flex-row">
        <Logo className={`text-white`} />
        <span id="user">
          <img src={user} alt="user" className="rounded-circle" width="40" />
        </span>
      </div>

      <div className="container mt-3">
        <h3>Schedule Appointment</h3>

        <div className="card">
          <div className="card-body">
            <p>Date: </p>
            <p>Time: </p>
            <p>Doctor: </p>
            <p>Remarks: </p>
            <div>
              <button className="btn btn-warning mr-2">Update</button>
              <button className="btn btn-danger mx-2">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
