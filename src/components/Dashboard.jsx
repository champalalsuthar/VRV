import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userRole = useSelector((state) => state.auth.userRole);

  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>
      {userRole === "Admin" && <p>Admin Controls</p>}
      {userRole === "Moderator" && <p>Moderator Controls</p>}
      <p>User Role: {userRole}</p>
    </div>
  );
};

export default Dashboard;
