import React, { useState } from "react";
import "../services/styles.css";
import axios from "../../connector";
import Header from "../header";



function App() {
  return (
    
    <div className="container">
      <h1 className="heading">
        Our <span>Services</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="venue.jpg" alt="xyz" />
          <h3>Venue selection</h3>
          <p>choose your venue according to your budget</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <img src="entertainment.jpg" alt="xyz" />
          <h3>ENTERTAINMENT</h3>
          <p>choose your Entertainment from various options</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <img src="food2.avif" alt="xyz" />
          <h3>FOOD AND DRINKS</h3>
          <p>We have the best bawarchi/cook for your event</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>

        <div className="box">
          <img src="photosandvideography.jpg" alt="xyz" />
          <h3>PHOTOS AND VIDEOS</h3>
          <p>We have the best photographer/videographer</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
        
        <div className="box">
          <img src="payments1.jpg" alt="xyz" />
          <h3>PAYMENT</h3>
          <p>we have secure payment options</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
        
        <div className="box">
          <img src="download.jpg" alt="xyz" />
          <h3>CUSTOM FOODS</h3>
          <p> Customize your foods according to your guests</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
        
        <div className="box">
          <img src="invitationcard.jpg" alt="xyz" />
          <h3>INVITATION CARD</h3>
          <p>We have the best invitation card ideas</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
        
        <div className="box">
          <img src="internationalevent.jpg" alt="xyz" />
          <h3>INTERNATIONAL EVENTS</h3>
          <p>we also do international events</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
        
        <div className="box">
          <img src="support2.jpg" alt="xyz" />
          <h3>SUPPORT</h3>
          <p>24*7 support team for your assistance</p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
