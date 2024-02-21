// Make sure to import React
import React, { useState } from "react";
import "../review/styles.css";
import axios from "../../connector";
import Header from "../header";
import { useNavigate, Link } from "react-router-dom";

const EventBookingReview = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    location: "",
    name: "",
    rating: "",
    review: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const reviewService = async (values) => {
    try {
      setIsLoading(true);
      const url = "http://localhost:5000/user/review";
      const { data } = await axios.post(url, values);
      const { status, cls, msg, payload } = data;
      setIsLoading(false);
      console.log("API Response:", data);
      if (status === "success") {
        // Registration successful, navigate to the thank you page
        console.log("Navigating to /user/review/thankyou4"); // Add this line for debugging
        navigate("/user/review/thankyou4");
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
        reviewService(dataToSend);
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
    <div>
      <Header/>

      <main>
        <section className="event-details">
      

        </section>
        
        <section className="review-form">
          <h2>Write a Review</h2>
          <form onSubmit={handleFormSubmit}>



          <label htmlFor="event name">Event Name:</label>
          <select id="eventname" name="eventname" value={formData.eventName}
          onChange={handleInputChange} required>
          <option value="Charity">Charity</option>
          <option value="Conference">Conference</option>
          <option value="Birthday">Birthday</option>
          <option value="Wedding">Wedding</option>
          <option value="Ring Ceremony">Ring Ceremony</option>
          <option value="DJ">DJ</option>
          <option value="Venue Selection">Venue Selection</option>
          <option value="Holi">Holi</option>
          </select>

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date}
          onChange={handleInputChange} required />


          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location}
          onChange={handleInputChange} required />


            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" value={formData.name}
            onChange={handleInputChange} required />
                
            <label htmlFor="rating">Rating:</label>
            <select id="rating" name="rating" value={formData.rating}
            onChange={handleInputChange} required>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
                
            <label htmlFor="review">Your Review:</label>
            <textarea id="review" name="review" rows="4" value={formData.review}
            onChange={handleInputChange} required></textarea>
                
            <button type="submit" className="signup-button" disabled={isLoading}>
            {isLoading ? (
            <div className="loading-spinner"></div>
            ) : (
            "Submit Review"
            )}
        </button>
        
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default EventBookingReview;
