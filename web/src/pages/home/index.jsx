import React, { useState } from "react";
import "../home/styles.css";
import axios from "../../connector";
import Header from "../header";

const Homepage = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Event Booking</h1>
        <p>Find and book your favorite events</p>
      </header>
      <main>
        <section className="featured-events">
          <h2>Featured Events</h2>
          {/* Add featured event components here */}
        </section>
        <section className="popular-categories">
          <h2>Popular Categories</h2>
          {/* Add popular category components here */}
        </section>
      </main>
    </div>
  );
};

export default Homepage;
