import React, { useState } from "react";
import "../signup/styles.css";
import axios from "../../connector";
import Header from "../header";
import { useNavigate, Link } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: "", // Add confirmPassword field
    mobile: "",
    dob: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signupService = async (values) => {
    try {
      setIsLoading(true);
      const url = "http://localhost:5000/user/signup";
      const { data } = await axios.post(url, values);
      const { status, cls, msg, payload } = data;
      setIsLoading(false);
      console.log("API Response:", data);
      if (status === "success") {
        // Registration successful, navigate to the thank you page
        console.log("Navigating to /user/signup/thankyou"); // Add this line for debugging
        navigate("/user/signup/thankyou");
      } else {
        alert("Registration failed. " + msg);
      }
    } catch (e) {
      setIsLoading(false);
      console.error("Error", e);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Check if passwords match before making the API call
    if (formData.password !== formData.confirmPassword) {
      setIsLoading(false);
      alert("Password and confirmation do not match.");
    } else {
      // Remove confirmPassword from the data sent to the API
      const { confirmPassword, ...dataToSend } = formData;
      signupService(dataToSend);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="bo">
        <div className="container">
          <div className="title">SIGN UP</div>
          <div className="content">

            <form onSubmit={handleFormSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First name</span>
                  <input type="text" 
                  placeholder="First name" 
                  name="firstName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required />
                </div>
                <div className="input-box">
                  <span className="details">Last name</span>
                  <input type="text" 
                  placeholder="last name" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required />
                  
                
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required />
                
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" 
                  placeholder="Enter your number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required />
                </div>

                <div className="input-box">
                  <span className="details">dob</span>
                  <input
                    type="date"
                    placeholder="enter the dob"
                    name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="text"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <button
              type="submit"
                   className="signup-button"
                       disabled={isLoading}>
                          {isLoading ? (
                        <div className="loading-spinner"></div>
                           ) : (
                                "Sign Up"
                                )}
        </button>


              {/* Link to Login Page */}
              <Link to="/user/login" className="login-link">
                Already have an account? Log in          
              </Link>
            </form>
          </div>
        
      </div>
    </div>
    
    </>
  );
}

export default Signup;
