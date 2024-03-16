"use client";
import React from "react";
import HeroSec from "../HeroSec/page";
import AboutUs from "../AboutUs/page";
import Features from "../Feature/page";
import Working from "../Working/page";
import Discounts from "../Discount/page";
import Newletter from "../NewLetter/page";
import Footer from "../Footer/page";
import Navber from "../Navbar/page";
// import "./layout.css";

function HomeApp() {
  return (
    <div className="home-warp" style={{fontFamily:'-moz-initial'}} >
      <Navber />
      {/* <Heading/> */}
      <HeroSec />
      <div className="second-sec">
        <AboutUs />
        <Features />
        <Working />
      </div>
      <Discounts />
      <div className="second-sec">
        {/* <Blog /> */}
        <Newletter />
      </div>
      <Footer />
    </div>
  );
}
export default HomeApp;
