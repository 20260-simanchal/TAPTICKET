import React, { useState } from "react";
import "../about/about.css";
import axios from "../../connector";
import Header from "../header";


function App() {
  return (
    <div>
      <Header />



      <main><br />
        <br />
        <br />
        <br />
        {/* about section starts */}
        <section className="about" id="about">
          <h1 className="heading"><span>about</span> us </h1>
          <div className="row">
            <div className="image">
              <img src="people-having-fun-wedding-hall_1303-19593.avif" alt="image" className="left-image" />
            </div>

            <div className="content">
              <h3>we will give a very special celebration for you</h3>
              <p>Welcome To Tap Ticket, Your Premier Destination For Hassle-Free Event Ticketing. We're Passionate About Providing You With Easy Access To The Hottest Events, Concerts, Sports Games, And More.

                Our Mission Is To Connect Event-Goers Like You With Memorable Experiences. Whether You're A Music Lover, Sports Enthusiast, Or A Fan Of The Performing Arts, We've Got You Covered. Say Goodbye To Long Lines And Complicated Ticket Purchasing Processes - We've Simplified It All.</p>
              <p> We are passionate about the world of events and dedicated to creating seamless, memorable, and meaningful gatherings for both organizers and attendees.</p>
              <h1>Why choose Tap Ticket?</h1>
              <br />
              <p>
                ➼ Support: Our dedicated support team is here to assist you every step of the way.</p><br />
              <p>➼Secure Transactions:Your online transactions are safe and secure with us. We use industry-leading encryption and security measures to protect your payment &nbsp;&nbsp;&nbsp;information.</p>
              <p>➼Wide Selection: We offer a vast selection of tickets for events of all kinds.</p><br />
              <p>➼Convenience: Purchase tickets anytime, anywhere, right from your computer or mobile device.</p>
            </div>
          </div>
        </section>
        {/* about section ends */}

        <section className="about-section">
          <h2 className="bold">Transforming events with our free, easy-to-use ticketing solution.</h2>
          <p>Tap Ticket was founded in 2021 after realizing many of the industry’s ticketing solutions were designed for large-scale events and lacked a user-friendly design. That left a high barrier to entry for smaller events who needed a more flexible solution without any long-term contracts. Our platform has similar tools as larger ticketing systems, and are available to all organizers, all the time, at no cost.</p>

        </section>
      </main>

      <footer>
        <section className="contect" id="contect">
          <h3 className="container"><span>feel free</span> to</h3>
          <a href="#" className="btn">contact us</a>
        </section>
        <p>&copy; 2023 Tap Ticket. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
