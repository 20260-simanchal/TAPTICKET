



// Import React at the top if you haven't already

import React from "react";
import "../gallery/styles.css";
import axios from "../../connector";
import Header from "../header";

// Create a functional component for your gallery
function Gallery() {
  return (
    <>
    <Header />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="b">
        
      <h1>Photo Gallery</h1>

      <div className="g">

        <div className="g-item">
          <img src="diwali.jpeg" alt="xyz" />
          <div className="caption">Diwali</div>
        </div>

        <div className="g-item">
          <img src="holi.webp" alt="xyz" />
          <div className="caption">Holi</div>
        </div>

        <div className="g-item">
          <img src="gnitar.jpg" alt="xyz" />
          <div className="caption">Guitar</div>
        </div>

        <div className="g-item">
          <img src="wedding.jpg" alt="xyz" />
          <div className="caption">Wedding</div>
        </div>

        <div className="g-item">
          <img src="weddinglunch.jpg" alt="xyz" />
          <div className="caption">Wedding Lunch</div>
        </div>

        <div className="g-item">
          <img src="Wedding-Event-Trends-For-2022.jpg" alt="xyz" />
          <div className="caption">Wedding Event</div>
        </div>


        <div className="g-item">
<img src="Wedding-Event.webp" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>

        

        <div className="g-item">
          <img src="dj.webp" alt="xyz" />
          <div className="caption">DJ-Nights</div>
        </div>





        <div className="g-item">
        <img src="b.avif" alt="xyz" />
        <div className="caption">Wedding Event</div>
      </div>

      <div className="g-item">
      <img src="c.avif" alt="xyz" />
      <div className="caption">Wedding Event</div>
    </div>

    <div className="g-item">
    <img src="weddinglunch.jpg" alt="xyz" />
    <div className="caption">Wedding Event</div>
  </div>

  <div className="g-item">
  <img src="w2.avif" alt="xyz" />
  <div className="caption">Wedding Event</div>
</div>

<div className="g-item">
<img src="entertainment.jpg" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>

<div className="g-item">
<img src="event.avif" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>
<div className="g-item">
<img src="w3.avif" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>


<div className="g-item">
<img src="food.avif" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>
<div className="g-item">
<img src="food2.avif" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>
<div className="g-item">
<img src="gnitar.avif" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>
<div className="g-item">
<img src="holi2.avif" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>

<div className="g-item">
<img src="venue.jpg" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>


<div className="g-item">
<img src="wedding.jpeg" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>

<div className="g-item">
<img src="divine-events-2_15_240203-1566990579.jpeg" alt="xyz" />
<div className="caption">Wedding Event</div>
</div>


<div className="g-item">
          <img src="slide1.jpg" alt="xyz" />
          <div className="caption">Event</div>
        </div>

        {/* Add more gallery items as needed */}
      </div>
      </div>
    </>
  );
}

export default Gallery;
