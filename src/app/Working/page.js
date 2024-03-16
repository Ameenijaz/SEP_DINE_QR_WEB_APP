"use client";
import Link from "next/link";
import React from "react";
// import "./all.css";

function Working() {
  return (
    <div className="Working-warp">
      <div className="working-container">
        <div className="working-containt">
          <h3>ABOUT US</h3>
          <h2>Working hours</h2>
          <p>Welcome to DineQR, your premier solution
for modernizing the dining experience.
Established in [Year], DineQR has been
dedicated to revolutionizing the way,
restaurants and customers connect.
Our commitment to cutting-edge technology
and exceptional service has made us a
trusted choice for the hospitality industry.</p>
          <div className="working-btn">
            <span className="btn-Rest transition-transform hover:scale-105 ease-in-out duration-500"> Reservation </span>
          <Link href={'/ContactUs'} >
            <span className="btn-contact transition-transform hover:scale-105 ease-in-out duration-500"> Contact Us </span>
            </Link>
          </div>
        </div>
        <div className="working-hour">
          <h3> Sunday to Tuesday </h3>
          <h6>
            09<span>:</span>
            00
          </h6>
          <h6>
            22<span>:</span>
            00
          </h6>
          <h3> FRIDAY TO SATURDAY </h3>
          <h6>
            11<span>:</span>
            00
          </h6>
          <h6>
            19<span>:</span>
            00
          </h6>
        </div>
      </div>
    </div>
  );
}
export default Working;
