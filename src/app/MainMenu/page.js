"use client";
import React from "react";
import Menutext from "../Menutext/page";
import Menufood from "../MenuFood/page";
import Navber from "../Navbar/page";
// import "./layout.css";

function Mainmenu() {
  return (
    <main>
      <Navber />
      <div className="Mainmenu-warp">
        <Menutext />
        <div className="p-10">
          <div className="bg-white rounded-lg shadow-md">
            <Menufood />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Mainmenu;
