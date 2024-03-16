"use client";
import React from "react";
import FAQ from "../FoodDropdown/page";
// import "./layout.css";

function Foodpopu() {
  return (
    <div className="Foodpopu-warp">
      <div className="Foodpopu-container">
        <div className="Foodpopu-hero-img">
          <img src={"/blog-5 (1).jpg"} />
          <div className="Foodpopu-hero-count">
            <h2>Whiteberry</h2>
          </div>
        </div>
        <div className="Foodpopu-meun">
          <FAQ />
        </div>
      </div>
    </div>
  );
}
export default Foodpopu;
