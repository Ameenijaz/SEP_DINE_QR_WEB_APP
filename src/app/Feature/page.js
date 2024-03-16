"use client";
import React from "react";

function Features() {
  const feature = "/icon-1.png";
  const feature1 = "/icon-2.png";
  const feature2 = "/icon-3.png";

  return (
  <div className="Features-warp p-14 ">
  <div className="features-container flex flex-col justify-center items-center ">
    <div className="feature-contant">
      <h3>FEATURES</h3>
      <h2>Why Choose DineQR?</h2>
      <p className="text-center px-20 ">
        People prefer DineQR for its seamless and contactless dining experience, providing convenient access to menus, personalized customization, and secure online payments through the app.
      </p>
    </div>
    <div className="feature-card-warp">
      <div className="feature-card">
        <img src={feature} alt="Menu Icon" />
        <h2>Diverse Menu Selection</h2>
        <p>
          Explore a menu curated for every taste, offering a wide range of delightful options.
        </p>
      </div>
      <div className="feature-card">
        <img src={feature1} alt="Fresh Ingredients Icon" />
        <h2>Always Fresh Ingredients</h2>
        <p>
          Enjoy dishes made with the finest and freshest ingredients for a delightful dining experience.
        </p>
      </div>
      <div className="feature-card">
        <img src={feature2} alt="Experienced Chefs Icon" />
        <h2>Expertly Crafted by Chefs</h2>
        <p>
          Indulge in dishes prepared by experienced chefs, ensuring a culinary journey of flavors.
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
export default Features;
