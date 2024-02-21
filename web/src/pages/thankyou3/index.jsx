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
      <h1 style={{ color: 'white' }}>Thank you! you have saled your ticket successfully. Get connected with us.</h1>
      <br></br><br></br><br></br><br></br><br></br>
      <Link to="/tickesale">
        <button>Go Back to ticketsale page</button>
      </Link>
    </div>
  );
};

export default visitus;