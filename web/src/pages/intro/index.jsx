import React, { useState, useEffect, useContext } from "react";
import "../intro/intro.css";
import { Link } from "react-router-dom";
import axios from "../../connector";
import { CurrentUserContext } from "../../index";
import Header from "../header";



const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");


const App = () => {
  const menuClickHandler = () => {
    const menu = document.querySelector("#menu-bars");
    const navbar = document.querySelector(".navbar");
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };

  
  return (
    <>
    <Header />
    <body className="body">
        <section className="home" id="home">
          <div className="content">
            <h3>its time to celebrate! the best <span> event organizers </span></h3>
            <a href="/ticketbook" className="btn">Book YOUR Ticket Now</a>
            <a href="/ticketsale" className="btn">Sale YOUR Ticket Now</a>
          </div>
{/*          <div className="swiper-container home-slider">
            <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="holi.webp" alt="Logo" /></div>  
            <div className="swiper-slide"><img src="lunch.avif" alt="Logo" /></div>
              <div className="swiper-slide"><img src="gnitar.jpg" alt="Logo" /></div>
              <div className="swiper-slide"><img src="wedding.jpg" alt="Logo" /></div>
              <div className="swiper-slide"><img src="weddinglunch.jpg" alt="Logo" /></div>
              <div className="swiper-slide"><img src="dj.webp" alt="Logo" /></div>
              <div className="swiper-slide"><img src="Wedding-Event-Trends-For-2022.jpg" alt="Logo" /></div>
              
            </div>
          </div>
          */}
        </section>


        {/* qrcode section starts */}


        <section className="qr" id="about">
        <h1 className="heading"><span style={{ color: '#e91c0d' }}>QR</span> code </h1>
        <div className="row">
          <div className="image">
            <img src="qrcode.png" alt="qr"/>
          </div>
      
      <div className="content">
        <h3>we will help you to create your own event QR code</h3>
        <p>welcome To Tap Ticket, Your Premier Destination For Hassle-Free Event Ticketing. We're Passionate About Providing You With Easy Access To The Hottest Events, Concerts, Sports Games, And More. Our Mission Is To Connect Event-Goers Like You With Memorable Experiences. Whether You're A Music Lover, Sports Enthusiast, Or A Fan Of The Performing Arts, We've Got You Covered. Say Goodbye To Long Lines And Complicated Ticket Purchasing Processes - We've Simplified It All.</p>
        <a href="/qrgenerate"  className="btn">create  QR code</a>
      </div>
      
        </div>
      </section>




        {/* qrcode section ends */}



        {/* service section starts */}


<section className="service" id="service">
  <h1 className="heading">our <span style={{ color: '#e91c0d' }}>services</span></h1>
  <div className="box-container">

    <div className="box">
      <i className="fas fa-map-marker-alt"></i>
      <h3>venue selection</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae.</p>
    </div>

    <div className="box">
      <i className="fas fa-envelope"></i>
      <h3>invitation card</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae.</p>
    </div>

    <div className="box">
      <i className="fas fa-music"></i>
      <h3>entertainment</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae.</p>
    </div>

    <div className="box">
      <i className="fas fa-utensils"></i>
      <h3>food and drinks</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae.</p>
    </div>

    <div className="box">
      <i className="fas fa-photo-video"></i>
      <h3>photo and videos</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae.</p>
    </div>

    <div className="box">
      <i className="fas fa-birthday-cake"></i>
      <h3>custom food</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae.</p>
    </div>

    <div className="box">
      <i className="fas fa-ring"></i>
      <h3>Rings & Wedding</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae.</p>
    </div>

    <div className="box">
      <i className="fas far fa-money-bill-alt"></i>
      <h3>Charity</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repudiandae.</p>
    </div>

  </div>
</section>

{/* service section ends*/}

{/*  about section starts*/ }


<section className="about" id="about">
  <h1 className="heading"><span style={{ color: '#e91c0d' }}>about</span> us </h1>
  <div className="row">
    <div className="image">
      <img src="contact.jpg" alt="contact"/>
    </div>

<div className="content">
  <h3>we will give a very special celebration for you</h3>
  <p>Tap Ticket was founded in 2021 after realizing many of the industry’s ticketing solutions were designed for large-scale events and lacked a user-friendly design. That left a high barrier to entry for smaller events who needed a more flexible solution without any long-term contracts. Our platform has similar tools as larger ticketing systems, and are available to all organizers, all the time, at no cost.</p>
  <p>welcome To Tap Ticket, Your Premier Destination For Hassle-Free Event Ticketing. We're Passionate About Providing You With Easy Access To The Hottest Events, Concerts, Sports Games, And More. Our Mission Is To Connect Event-Goers Like You With Memorable Experiences. Whether You're A Music Lover, Sports Enthusiast, Or A Fan Of The Performing Arts, We've Got You Covered. Say Goodbye To Long Lines And Complicated Ticket Purchasing Processes - We've Simplified It All.</p>
  <a href="/contact" className="btn">contact us</a>
</div>

  </div>
</section>


{/* about section ends */ }


{/* gallery section starts */ }


<section className="gallery" id="gallery">
  <h1 className="heading">our <span style={{ color: '#e91c0d' }}>gallery</span></h1>

  <div className="box-container">
  <div className="box">
    <img src="diwali.jpeg" alt="diwali"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="wedding.avif" alt="wedding"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="gnitar.jpg" alt="gnitar"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="holi2.avif" alt="holi2"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="dj.avif" alt="dj"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="food.avif" alt="food"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="w2.avif" alt="w2"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="wedding.jpg" alt="wedding"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="weddinglunch.jpg" alt="weddinglunch"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="w3.avif" alt="w3"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>


  <div className="box">
    <img src="food2.avif" alt="food2"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

  <div className="box">
    <img src="lunch.avif" alt="lunch"/>
    <h3 className="title">photos and events</h3>
    <div className="icons">
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-share"></a>
      <a href="#" className="fas fa-eye"></a>
    </div>
  </div>

</div>
</section>

{/* gallery section ends */ }


{/*  price section starts  */ }


<section className="price" id="price">
  <h1 className="heading">our <span style={{ color: '#e91c0d' }}>price</span></h1>
  <div className="box-container">

    <div className="box">
      <h3 className="title">for birthdays</h3>
      <h3 className="amount">$550.99</h3>
      <ul><li><i className="fas fa-check"></i>full services</li>
        <li><i className="fas fa-check"></i>decoration</li>
        <li><i className="fas fa-check"></i>music and photos</li>
        <li><i className="fas fa-check"></i>food and drinks</li>
        <li><i className="fas fa-check"></i>invitation card</li>
      </ul>
      <a href="/price" className="btn">check out</a>
    </div>

    <div className="box">
      <h3 className="title">for concert</h3>
      <h3 className="amount">$1000.99</h3>
      <ul><li><i className="fas fa-check"></i>full services</li>
        <li><i className="fas fa-check"></i>decoration</li>
        <li><i className="fas fa-check"></i>music and photos</li>
        <li><i className="fas fa-check"></i>food and drinks</li>
        <li><i className="fas fa-check"></i>invitation card</li>
      </ul>
      <a href="/price" className="btn">check out</a>
    </div>

    <div className="box">
      <h3 className="title">for wedding</h3>
      <h3 className="amount">$1500.99</h3>
      <ul><li><i className="fas fa-check"></i>full services</li>
        <li><i className="fas fa-check"></i>decoration</li>
        <li><i className="fas fa-check"></i>music and photos</li>
        <li><i className="fas fa-check"></i>food and drinks</li>
        <li><i className="fas fa-check"></i>invitation card</li>
      </ul>
      <a href="/price" className="btn">check out</a>
    </div>

    <div className="box">
      <h3 className="title">for others</h3>
      <h3 className="amount">$2050.99</h3>
      <ul><li><i className="fas fa-check"></i>full services</li>
        <li><i className="fas fa-check"></i>decoration</li>
        <li><i className="fas fa-check"></i>music and photos</li>
        <li><i className="fas fa-check"></i>food and drinks</li>
        <li><i className="fas fa-check"></i>invitation card</li>
      </ul>
      <a href="/price" className="btn">check out</a>
    </div>

  </div>
</section>

{/*  price section ends */ }



{/* review section starts */ }


<section className="review" id="review">
  <h1 className="heading">client <span style={{ color: '#e91c0d' }}>review</span></h1>
  <div className="review-slider swiper-container">

    <div className="swiper-wrapper">

      <div className="swiper-slide box">
        <i className="fas fa-quote-right"></i>
        <div className="user">
          <img src="holi.webp" alt="logo"/>
          <div className="user-info">
            <h3>Simanchal</h3>
            <span>happy client</span>
          </div>
        </div>
                <p>I just had to take a moment to express my absolute delight with the Tapticket event website! What an incredible experience it has been from start to finish.First and foremost, the website design is not just visually appealing but also incredibly user-friendly. Navigating through the event listings, purchasing tickets, and even finding information about the venues was a breeze. The layout and interface are so intuitive that I didn't need any tutorials or guidance.</p>

                  
      </div>

      <div className="swiper-slide box">
        <i className="fas fa-quote-right"></i>
        <div className="user">
          <img src="slide1.jpg" alt="logo2"/>
          <div className="user-info">
            <h3>Tamasha</h3>
            <span>happy client</span>
          </div>
        </div>
        <p>the ticketing process was smooth as silk. I've had my fair share of frustrations with online ticketing systems in the past, but Tapticket made it a seamless and stress-free experience. The checkout process was lightning-fast, and I appreciated the various payment options available.

            The real-time updates and notifications were a game-changer. I never had to wonder about the status of my tickets or the event schedule. The email reminders and mobile notifications kept me informed every step of the way, making me feel well taken care of.</p>
      </div>

      <div className="swiper-slide box">
        <i className="fas fa-quote-right"></i>
        <div className="user">
          <img src="dj.webp" alt="logo3"/>
          <div className="user-info">
            <h3>Rajeev</h3>
            <span>happy client</span>
          </div>
        </div>
        <p>Tapticket made it a seamless and stress-free experience. The checkout process was lightning-fast, and I appreciated the various payment options available. The real-time updates and notifications were a game-changer. I never had to wonder about the status of my tickets or the event schedule.</p>
      </div>


    </div>
  </div></section>
  {/*  review section ends*/ }



{/*  footer section starts */ }


<section className="footer">
<div className="box-container">

  <div className="box">
    <h3>branches</h3>
    <a href="#"><i className="fas fa-map-marker-alt"></i>mumbai</a>
    <a href="#"><i className="fas fa-map-marker-alt"></i>kolkata</a>
    <a href="#"><i className="fas fa-map-marker-alt"></i>odisha</a>
    <a href="#"><i className="fas fa-map-marker-alt"></i>goregaon</a>
    <a href="#"><i className="fas fa-map-marker-alt"></i>bhubaneswar</a>
    <a href="#"><i className="fas fa-map-marker-alt"></i>gujrat</a>
  </div>

  <div className="box">
    <h3>quick links</h3>
    <a href="/"><i className="fas fa-arrow-right"></i> home </a>
    <a href="/services"><i className="fas fa-arrow-right"></i>service</a>
    <a href="/about"><i className="fas fa-arrow-right"></i>about</a>
    <a href="/gallery"><i className="fas fa-arrow-right"></i>gallery</a>
    <a href="/price"><i className="fas fa-arrow-right"></i>price</a>
    <a href="/review"><i className="fas fa-arrow-right"></i>review</a>
    <a href="/contact"><i className="fas fa-arrow-right"></i>contact</a>
  </div>

  <div className="box">
    <h3>contact info</h3>
    <a href="#"><i className="fas fa-phone"></i> +789-434-5543 </a>
    <a href="#"><i className="fas fa-phone"></i> +111-222-3333 </a>
    <a href="#"><i className="fas fa-envelope"></i>simanchalsahu7894@gmail.com</a>
    <a href="#"><i className="fas fa-envelope"></i>infosahu96@gmail.com</a>
    <a href="#"><i className="fas fa-map-marker-alt"></i> odisha, india - 751010 </a>
  </div>

  <div className="box">
    <h3>follow us</h3>
    <a href="#"><i className="fab fa-facebook-f"></i> facebook </a>
    <a href="#"><i className="fab fa-twitter"></i> twitter </a>
    <a href="#"><i className="fab fa-instagram"></i>instagram </a>
    <a href="#"><i className="fab fa-linkedin"></i> linkedin </a>
  </div>
</div>
  
  <div className="credit">created by <span>mr. Simanchal</span> | all rights reserved  </div>


</section>

{/* footer section ends  */ }










      </body>
      </>
  );
};

export default App;
