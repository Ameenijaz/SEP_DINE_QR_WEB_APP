"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import "./layout.css";
import { useTypewriter,Cursor } from 'react-simple-typewriter';

function HeroSec() {
const [user,setUser]=useState();
const [userid,setUserid ]=useState();

  useEffect(() => {
    const id = localStorage.getItem("_id");
    setUserid(id);
    var userobj = localStorage.getItem("current_user");
    // console.log(JSON.parse(userobj), "data in local object");
    setUser(JSON.parse(userobj));
    console.log("data:",JSON.parse(userobj));
    // Call the async function to fetch data
  }, []);

  const [text] = useTypewriter({
    words: [
      "Revolutionizing Your Dining Experience.",
      "Effortless Dining with DineQR.",
      "Explore, Order, Enjoy - Anytime, Anywhere.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  

  return (
    <div className="hero-sec">
      <div className="hero-contant  " >
        <h3 className="text-xl font-semibold p-20 " > Hello, new friends! </h3>
        <div className="h-56 text-white max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl uppercase font-bold ">
      WELCOME BACK TO DINE_QR
        </h1>
      <p className="text-base md:text-lg font-semibold mt-2">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
        <div className="hero-btn">
          <span className="order transition-transform  hover:scale-105 duration-500 cursor-pointer">GET STARTING</span>
          <Link href={'/MainMenu'} >
          <button className="menu transition-transform  hover:scale-105 duration-500 cursor-pointer">MENU</button>
   </Link>
        </div>
      </div>
    </div>
  );
}
export default HeroSec;
