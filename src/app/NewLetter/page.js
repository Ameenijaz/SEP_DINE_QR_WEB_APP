"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Newletter() {


  const [showThankYou, setShowThankYou] = useState(false);
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Perform your subscription logic here
    // Show the thank-you dialogue
   if(!email){
   toast.error("Input filed is empty");
   }else{
    setShowThankYou(true);
    toast.success("Thank You! For Subscribe Our NewsLetter");
  }
  };


  return (
    <div className="newletter-warp">
      <ToastContainer/>
      <div className="newletter-container">
        <div className="newletter-contant">
          <h3> Newsletter </h3>
          <h2> Subscribe our newsletter </h2>
          <p>Newsletters provide a platform to share promotional offers, discounts, or exclusive deals with subscribers.</p>
          <form
            action="/#wpcf7-f368-p997-o1"
            method="post"
            class="wpcf7-form init mailchimp-ext-0.5.69"
            aria-label="Contact form"
            novalidate="novalidate"
            data-status="init"
            onSubmit={handleSubscribe}
          >
           <input
              size="40"
              className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
              aria-required="true"
              aria-invalid="false"
              placeholder="Enter your email here"
              type="email"
              name="sf_email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              // Add value and onChange if you want to manage the email input state
            />
            <button class="tst-btn transition-transform hover:scale-105 ease-in-out duration-500" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-red-600 border rounded-lg p-8 w-[500px] h-auto">
            <div className="flex justify-center items-center" >
          <img src="https://i.ibb.co/Lkn7rkG/thank-you-envelope.png" alt="thank-you-envelope" className="w-[200px] h-[200px]" border="0"/>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-white text-center mt-3">Thank You!
           </h2>
           <h2 className="text-xl  text-white font-medium font-sans text-center" > {email}</h2>
            <p className="text-white mb-6 text-center mt-2">
              We appreciate your interest. You've successfully subscribed to our newsletter.
            </p>
              <a onClick={() =>{ setShowThankYou(false);    setEmail('');}} className="transition-transform hover:scale-105 ease-in-out duration-500 text-white bg-pink-600 px-5 py-3 font-medium font-sans rounded-lg shadow-md text-center  flex justify-center items-center cursor-pointer"
              >Homepage</a>
          </div>
        </div>
      )}
    </div>
  );
}
export default Newletter;
