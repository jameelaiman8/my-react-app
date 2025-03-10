import { useState } from "react";

function WelcomeMessage() {
  // State to track if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login state
  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      {/* Show different messages based on login state */}
      <h2>{isLoggedIn ? "Welcome back, User! 🎉" : "Please log in"}</h2>

      {/* Button to toggle login state */}
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default WelcomeMessage;
