"use client";
import React from "react";
// import "./AboutUs.css";
import { Icon } from "@iconify/react";
// import "./layout.css";

function AboutUs() {
  const about = "/about-imgres1-1.jpg";
  const signature = "/signature-pics.png";

  return (
    <div className="about-sec "  >
      <div className="about-contanier "  >
        <div className="about-img">
          <img src={about} className="rounded-lg "  />
        </div>
        <div className="">
          <div className="">
            <div className="flex gap-2" >
            <img src={'/about.jpg'} className="w-[100px] h-[100px]"/>
              
            <h6 className=" text-3xl font-bold text-red-600 mt-7 ">ABOUT US</h6>
            </div>
            <h2 className="font-bold mt-3">
              Enjoy an Exceptional
              <span className="">Journey of Taste</span>
            </h2>
            <p className=" mt-3 text-sm ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta explicabo.
            </p>
          </div>
          <div className="">
            <ul className="">
              <li className="flex flex-row gap-3 mt-2 ">
                <span className="bg-gray-100 rounded-lg p-2 ">
                  <Icon icon="charm:square-tick" color="blue" className="text-blue-600 text-xl " />
                </span>
                <span className="icon-list-text  mt-1">
                  Project Quality Management Plan
                </span>
              </li>
              <li className="flex flex-row gap-3 mt-2 ">
              <span className="bg-gray-100 rounded-lg p-2 ">
                  <Icon icon="charm:square-tick" color="blue" className="text-blue-600 text-xl " />
                </span>
                <span className="icon-list-text mt-1 ">
                  The Ability to Delegate Tasks
                </span>
              </li>
              <li className="flex flex-row gap-3 mt-2">
              <span className="bg-gray-100 rounded-lg p-2 ">
                  <Icon icon="charm:square-tick" color="blue" className="text-blue-600 text-xl " />
                </span>
                <span className="icon-list-text  mt-1">
                  It might be a finished or unfinished
                </span>
              </li>
            </ul>
            <div className="about-siger mt-20">
              <img src={signature} />
              <h2 className=" text-xl font-bold text-red-600 " >CEO and Founder</h2>
            </div>
          </div>
          <div style={{backgroundColor:'red'}}  className="  rounded-lg  text-white text-center py-4 text-sm
           font-medium  w-[150px] hover:underline cursor-pointer
            transition-transform  hover:scale-105 duration-500  ">LEARN MORE</div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
