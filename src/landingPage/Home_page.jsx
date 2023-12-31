import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import photo1 from "../photos/shoe1.jpg";
import photo2 from "../photos/shoe2.jpg";
import photo3 from "../photos/shoe4.jpg";
import jordan10 from "../photos/jordan10.jpg";
import CustomCursor from "../Effects/Mouse";

function Home_page() {
  return (
    <>
      <CustomCursor />
      <div className="main">
        <div className="home">
          <div className="home-main">
            <h5>We Make it happen.</h5>
            <div className="headings">
              <h1>Stride,</h1>
              <h1>Style,</h1>
              <h1>Unleashed.</h1>
            </div>
          </div>
        </div>

        <div className="homelast">
          <p>
            Kickshub is where sneaker culture meets cutting-edge design.
            <br /> Redefine your footwear collection with our curated range.
            <br /> Walk confidently, knowing your style is ahead of the curve.
          </p>
        </div>
        <div className="featured ">
          <div className="fheading">
            <h1>featured</h1>
            <h1>projects</h1>
          </div>
          <div className="featured-images">
            <div className="fleft">
              <div className="fleft-elem">
                <h3>KicksHub</h3>
                <h1>
                  official website of Kickshub,Elevate your step with our
                  curated kicks,
                </h1>
                <h4>Where style meets comfort, every stride, it clicks.</h4>
              </div>
            </div>
            <div className="fright">
              <div className="images">
                <img src={jordan10} alt="" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button onClick={() => window.scrollTo(0, 0)}>
              <Link
                to="/shop"
                style={{ textDecoration: "none", backgroundColor: "white" }}
              >
                View all Products
              </Link>
            </button>
          </div>
        </div>
        <div className="recently-viewed">
          <h2>Recently Viewed</h2>
          <div className="boxes">
            <div className="box1 box">
              <img src={photo1} alt="" loading="lazy"/>
              <div className="cart-feature home_page">
                <h2>Nike 1</h2>
                <h4>MRP:₹14,100</h4>
                <button>Add to Cart</button>
              </div>
            </div>
            <div className="box2 box">
              <img src={photo2} alt="" loading="lazy"/>
              <div className="cart-feature home_page">
                <h2>Nike 2</h2>
                <h4>MRP:₹18,100</h4>
                <button>Add to Cart</button>
              </div>
            </div>
            <div className="box3 box">
              <img src={photo3} alt="" loading="lazy"/>
              <div className="cart-feature home_page">
                <h2>Nike 3</h2>
                <h4>MRP:₹20,100</h4>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_page;
