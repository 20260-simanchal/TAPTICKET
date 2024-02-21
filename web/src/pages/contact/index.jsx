import React, { useState } from "react";
import "../contact/styles.css";
import axios from "../../connector";
import Header from "../header";
import { useNavigate, Link } from "react-router-dom";



const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const contactService = async (values) => {
    try {
      setIsLoading(true);
      const url = "http://localhost:5000/user/contact";
      const { data } = await axios.post(url, values);
      const { status, cls, msg, payload } = data;
      setIsLoading(false);
      console.log("API Response:", data);
      if (status === "success") {
        // Registration successful, navigate to the thank you page
        console.log("Navigating to /user/contact/thankyou5"); // Add this line for debugging
        navigate("/user/contact/thankyou5");
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
        contactService(dataToSend);
      }
    };

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  



  return (<>
    <Header />
    <body className="body">
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <br></br>
          <form onSubmit={handleFormSubmit}>


          <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" value={formData.name}
          onChange={handleInputChange} required />
        </div>


            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email}
              onChange={handleInputChange} required />
            </div>



            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input type="number" id="mobile" name="mobile" value={formData.mobile}
              onChange={handleInputChange} required />
            </div>


            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" value={formData.message}
              onChange={handleInputChange} required />
            </div>


             <button type="submit" className="signup-button" disabled={isLoading}>
            {isLoading ? (
            <div className="loading-spinner"></div>
            ) : (
            "  Submit  "
            )}
        </button>
          </form>
        </div>
      </section>
      <footer>
      <p>&copy; All Rights Reserved</p>
    </footer>
    </body>
    </>
  );
}

export default ContactUs;
