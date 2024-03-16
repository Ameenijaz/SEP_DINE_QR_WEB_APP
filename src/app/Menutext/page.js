"use client";
import React from "react";
import { Icon } from "@iconify/react";
// import "./layout.css";
function Menutext() {
  return (
    <div className="Menutext-warp">
      <div className="Menutext-contant w-[100%]">
        <div className="Menutext-text w-[100%]">
          <h3 style={{fontFamily:'-moz-initial'}} >Hi Dear Customer</h3>
          <h2 style={{fontFamily:'-moz-initial'}} >What do you Want for dinner</h2>
          <div className="flex gap-3 w-[100%] p-5 " >
          <p style={{fontSize:'80px',fontFamily:'-moz-initial'}} className=" font-extrabold text-white mt-5 h-[400px]  ml-[20px]">
        I<span className="text-red-600">Ts</span> not <span className="text-red-600">J</span>us<span className="text-red-600">T</span><br/>
        f<span className="text-red-600">O</span><span className="text-red-600">O</span>d its An <br/>
        <span className="text-red-600">E</span>xperienc<span className="text-red-600">E</span>
      </p>

      <img src="nodels.avif" className="w-[400px] h-[400px] rounded-full shadow-lg" />
        <div className="Menutext-img w-[30%]">
          <img src={"/Chef.png"} loading="lazy" />
          </div>
          </div>

        </div>
     
      </div>
    </div>
  );
}
export default Menutext;
