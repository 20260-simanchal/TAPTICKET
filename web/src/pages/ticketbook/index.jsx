import React, { useState } from "react";
import "../ticketbook/styles.css";
import axios from "../../connector";
import Header from "../header";
import { useNavigate, Link } from "react-router-dom";


const TicketBook = () => {
    const [formData, setFormData] = useState({
      eventName: "",
      state:"",
      city: "",
      location: "",
      mobile: "", 
      eventDate: "",
      eventTime: "",
      ticket: "",
    });



    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const ticketBookService = async (values) => {
      try {
        setIsLoading(true);
        const url = "http://localhost:5000/user/ticketbook";
        const { data } = await axios.post(url, values);
        const { status, cls, msg, payload } = data;
        setIsLoading(false);
        console.log("API Response:", data);
        if (status === "success") {
          // Registration successful, navigate to the thank you page
          console.log("Navigating to /user/ticketbook/thankyou2"); // Add this line for debugging
          navigate("/user/ticketbook/thankyou2");
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
          ticketBookService(dataToSend);
        }
      };





    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    







    return(
        <>
        <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

        <div class="bo">
        <div className="container">
            <div className="title">Book YOUR TICKET NOW</div>
            <div className="content">

                <form onSubmit={handleFormSubmit}>
                    <div className="user-details">


                        <div className="input-box">
                            <span className="details">Event Name:</span>
                            <select name="eventName" value={formData.eventName}
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
                        </div>






                        <div className="input-box">
                            <span className="details">State</span>
                            <select name="state" value={formData.state}
                                onChange={handleInputChange} required >
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Orissa">Orissa</option>
                                    <option value="Pondicherry">Pondicherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttaranchal">Uttaranchal</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>



                        <div className="input-box">
                            <span className="details">City:</span>
                            <input type="text" placeholder="Enter your city" name="city" value={formData.city}
                                onChange={handleInputChange} required />
                        </div>


                        <div className="input-box">
                            <span className="details">Location:</span>
                            <input type="text" placeholder="Enter exact Location" name="location" value={formData.location}
                                onChange={handleInputChange} required />
                        </div>



                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" placeholder="Enter your number" name="mobile" value={formData.mobile}
                                onChange={handleInputChange} required />
                        </div>



                        <div className="input-box">
                            <span className="details">Event Date</span>
                            <input type="date" placeholder="enter event date" name="eventDate" value={formData.eventDate}
                                onChange={handleInputChange} required />
                        </div>


                        <div className="input-box">
                            <span className="details">Event Timing</span>
                            <input type="time" placeholder="enter event Time" name="eventTime" value={formData.eventTime}
                                onChange={handleInputChange} required />
                        </div>



                        <div className="input-box">
                            <span className="details">Per ticket cost:500 <br/>
                            Number of tickets</span>
                            <input type="number" placeholder="No of tickets to book" name="ticket"
                                value={formData.ticket} onChange={handleInputChange} required />
                        </div>



                    </div>

                    <button type="submit" className="signup-button" disabled={isLoading}>
                        {isLoading ? (
                        <div className="loading-spinner"></div>
                        ) : (
                        "Book Ticket"
                        )}
                    </button>


                    {/* Link to Login Page */}
                    <Link to="/ticketsale" className="login-link">
                    Already have Tickets? Sale Tickets          
                    </Link>
                </form>
            </div>
        </div>
    </div>

    </>


    );






};

export default TicketBook;
