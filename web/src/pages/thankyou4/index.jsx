import React from "react";
import { Link } from "react-router-dom";

const visitus = () => {
	console.log("Visit component rendered"); // Add this line for debugging
  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br><br></br><br></br><br></br>
      <h1 style={{ color: 'white' }}>Thank you for your Review ! Get connected with us.</h1>
      <br></br><br></br><br></br><br></br><br></br>
      <Link to="/review">
        <button>Go Back to Review page</button>
      </Link>
    </div>
  );
};

export default visitus;