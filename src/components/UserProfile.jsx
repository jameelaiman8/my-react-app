import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: "John Doe", age: 28, email: "john@example.com" });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading user profile... ⏳</h3>
      ) : (
        <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
          <h3>User Profile</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
