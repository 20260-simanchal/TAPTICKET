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
      <h1 style={{ color: 'white' }}>Thank you for contacting ! Get connected with us.</h1>
      <br></br><br></br><br></br><br></br><br></br>
      <Link to="/contact">
        <button>Go Back to contact page</button>
      </Link>
    </div>
  );
};

export default visitus;