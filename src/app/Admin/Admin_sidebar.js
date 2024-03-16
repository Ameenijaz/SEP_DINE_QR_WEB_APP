"use client";
import { useEffect, useState } from "react";
import { Sidebartabs } from "./TabsLsits";



export function SideBar({ onSetTab }) {
    const [selectedTab, setSelectedTab] = useState("Add Products"); // State to manage selected tab
  
    const handleTabClick = (tab) => {
      setSelectedTab(tab);
      onSetTab(tab);
    };
    
    return (
      <aside className="bg-white p-4 md:w-1/5">
        <nav>
          <ul className="flex flex-col  border-b-2 mt-9 ">
            {Sidebartabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => handleTabClick(tab.id)}
                className={`cursor-pointer  pl-7 p-4  rounded-lg mb-3 transition duration-300 ease-in-out  ${
                  selectedTab === tab.id
                  ? "text-white shadow-lg font-bold transition  rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none "
                  : "hover:bg-gray-100 font-sans font-bold"
                }`}
              >
                <div className="flex flex-row  items-center gap-2">
                  <p>{tab.icon}</p>
                  <p className="ml-2 font-medium text-sm">{tab.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
  