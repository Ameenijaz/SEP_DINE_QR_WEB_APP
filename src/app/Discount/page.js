"use client";
import Link from "next/link";
import React from "react";
// import "./layout.css";

function Discounts() {
  const discountimg = "/dostot.png";

  return (
    <div className="discounts-warp">
  <div className="discount-contant">
    <div className="dist-text">
      <h3>Specials</h3>
      <h2>
        Exclusive Discounts
        <br /> on Special Dishes
      </h2>
      <p>
        Discover exclusive discounts on our special dishes, crafted with care to tantalize your taste buds. Quaerat debitis, vel, sapiente dicta sequi labore porro pariatur harum expedita.
      </p>
      <Link href={'/MainMenu'} >
      <div style={{backgroundColor:'red'}}  className=" mt-5  rounded-lg  text-white text-center py-4 text-sm
           font-sans font-medium  w-[150px]  cursor-pointer
            transition-transform  hover:scale-105 duration-500  ">
        ORDER NOW   
           </div>
           </Link>
    </div>
    <div className="dist-img">
      <img src={discountimg} alt="Special Discounts" />
    </div>
  </div>
</div>

  );
}
export default Discounts;
