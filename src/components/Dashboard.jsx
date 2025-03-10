import { useState } from "react";

function Dashboard() {
  const [role, setRole] = useState("user"); // "admin" or "user"

  return (
    <div>
      <h2>Dashboard</h2>
      <p>You are logged in as: <strong>{role.toUpperCase()}</strong></p>

    {role === "admin" ? (
    <div style={{ background: "#ffcccb", padding: "10px", borderRadius: "5px" }}>
        <h3>Admin Panel 🛠</h3>
        <p>Manage users, view reports, and configure settings.</p>
    </div>
    ) :( 
        <div style={{ background: "#d1e7dd", padding: "10px", borderRadius: "5px" }}>
          <h3>User Dashboard 👤</h3>
          <p>View your profile, track progress, and access resources.</p>
        </div>
      )}

      <button onClick={() => setRole(role === "admin" ? "user" : "admin")}>
        Switch to {role === "admin" ? "User" : "Admin"} Mode
      </button>
    </div>
  );
}

export default Dashboard;
