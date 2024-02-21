import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
	console.log("ThankYou component rendered"); // Add this line for debugging
  return (
    <div>
      <h1>Thank you for registering with us!</h1>
      <Link to="/user/login">
        <button>Go Back to Login</button>
      </Link>
    </div>
  );
};

export default ThankYou;