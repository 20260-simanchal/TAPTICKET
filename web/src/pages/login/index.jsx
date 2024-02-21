import React, { useState } from "react";
import "../login/styles.css";
import axios from "../../connector";
import Header from "../header";


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/login", formData);
    const data = await response.data;
    const { status, message, payload = {} } = data;
    if (!status) {
      window.alert(message);
    }
    if (status) {
      localStorage.setItem("token", payload.token);
      const redirectUrl = payload.redirectUrl;
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      console.log(formData);
    }
  };

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div id="container">
        <div id="childcontainer">

         <center><h1><div id="logintext">Login</div></h1></center>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="size">Email-id </label>
              <input
                type="text"
                name="email"
                required
                onChange={updateFormData}
                className="input"
                placeholder="enter email id"
           
                
                value={formData.email}
                 
                
              />
            </div>
            <div className="input-container">
              <label className="size">Passcode</label>
              <input
                type="password"
                name="password"
                required
                onChange={updateFormData}
                placeholder="   enter password"
                className="input"
                value={formData.password}
              
                
              />
            </div>
            <div className="input-container button-container">
              <input type="submit"   className="button" value="login"/>
            </div>

  

          </form>
               
        </div>
      </div>
    </>
  );
};

export default LoginForm;
