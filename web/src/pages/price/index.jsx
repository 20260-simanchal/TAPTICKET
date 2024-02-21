import React from 'react';
import '../price/styles.css'; 
import Header from "../header";

function PricePage() {
  return (
    <>
    <Header />
    <br />
    <br />
    <div className="cont">
      <h1><span style={{ color: 'aliceblue' }}>OUR</span> PRICE</h1>
      <div className="price-row">
        <span>
          <div className="price-col">
            <h3 style={{ color: 'rgb(232, 42, 29)' }}>FOR BIRTH</h3>
            <h2>$550.99</h2>
            <ul>
              <li>Decoration</li>
              <li>Package Deals</li>
              <li>Special offer</li>
              <li>Refund Policy</li>
              <li>Additional Services</li>
              <li>Payment Instructions</li>
            </ul>
            <a href="/ticketbook" className="cta_btn">Book Your Ticket</a>
          </div>
        </span>
        <span>
          <div className="price-col">
            <h3 style={{ color: 'rgb(232, 42, 29)' }}>For Concert</h3>
            <h2>$1000.99</h2>
            <ul>
              <li>Decoration</li>
              <li>Package Deals</li>
              <li>Special offer</li>
              <li>Refund Policy</li>
              <li>Additional Services</li>
              <li>Payment Instructions</li>
            </ul>
            <a href="/ticketbook" className="cta_btn">Book Your Ticket</a>
          </div>
        </span>
        <span>
          <div className="price-col">
            <h3 style={{ color: 'rgb(232, 42, 29)' }}>For Wedding</h3>
            <h2>$1500.99</h2>
            <ul>
              <li>Decoration</li>
              <li>Package Deals</li>
              <li>Special offer</li>
              <li>Refund Policy</li>
              <li>Additional Services</li>
              <li>Payment Instructions</li>
            </ul>
            <a href="/ticketbook" className="cta_btn">Book Your Ticket</a>
          </div>
        </span>
        <span>
          <div className="price-col">
            <h3 style={{ color: 'rgb(232, 42, 29)' }}>For Others</h3>
            <h2>$2050.99</h2>
            <ul>
              <li>Decoration</li>
              <li>Package Deals</li>
              <li>Special offer</li>
              <li>Refund Policy</li>
              <li>Additional Services</li>
              <li>Payment Instructions</li>
            </ul>
            <a href="/ticketbook" className="cta_btn">Book Your Ticket</a>
          </div>
        </span>
      </div>
    </div>
    </>
  );
}

export default PricePage;
