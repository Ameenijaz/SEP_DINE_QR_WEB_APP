"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { IoLogInOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { Ring } from "@uiball/loaders";

// import "./layout.css";
function Navber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userid, setUserid] = useState("");
  const [user, setUser] = useState("");
  const router = useRouter();
  const router1 = useSearchParams();
  const userparams = router1.get("data");
  const [isLoading1, setIsLoading1] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Add_Project

  const handleOptionClick = (option, move) => {
    setSelectedOption(option);
    setShowMenu(false);

    console.log(move);
    // Navigate to the selected route if it's defined
    router.push(move);
  };

  const userdata = JSON.parse(userparams);

  useEffect(() => {
    console.log("fetching data from databse:", userdata);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedTab, setSelectedTab] = useState("HOME"); // Initialize with the default selected tab

  const handleTabClick = (tab) => {
    setIsLoading1(true);
    console.log(tab);
    setSelectedTab(tab);
    setTimeout(() => {
      setIsLoading1(false);
    }, 6000);
  };

  const login = () => {
    router.push("/Components/Login");
  };

  const SignUp = () => {
    router.push("/Components/Sign_Up");
  };

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("_id");
    setUserid(id);
    var userobj = localStorage.getItem("current_user");
    setUser(JSON.parse(userobj));
    console.log("data:", JSON.parse(userobj));
  }, []);
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Replace with the actual async operation.
  };

  return (
    <header
      className="bg-white shadow-2xl py-3"
      style={{ fontFamily: "-moz-initial" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href={`/Home`}>
            <img
              src={`/logo.png`}
              width={80}
              height={80}
              className={`-mt-2`}
              style={{ filter: "hue-rotate(170deg)" }}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop menu items */}
        <nav
          className={`md:flex md:items-center space-x-6 text-black text-lg
          ${
            isMenuOpen
              ? "block absolute top-16 left-0 w-full bg-gray-50"
              : "hidden md:block"
          }`}
        >
          <ul className="md:flex md:space-x-6 md:text-black md:text-sm">
            <li>
              <Link
                href="/Home"
                className="block py-2 px-4 hover:bg-gray-100 hover:rounded-lg duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/MainMenu"
                className="block py-2 px-4 hover:bg-gray-100 hover:rounded-lg duration-500"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="block py-2 px-4 hover:bg-gray-100 hover:rounded-lg duration-500"
              >
                AboutUs
              </Link>
            </li>
            <li>
              <Link
                href="/ContactUs"
                className="block py-2 px-4 hover:bg-gray-100 hover:rounded-lg duration-500"
              >
                ContactUs
              </Link>
            </li>
            <li>
              {user?.userType == "Admin" && (

          
              <Link
                href="/Admin"
                className="block py-2 px-4 hover:bg-gray-100 hover:rounded-lg duration-500"
              >
                Admin
              </Link>
                  )}
            </li>
          </ul>
        </nav>

        <div
          className={` search-icon ${
            isMenuOpen
              ? "block fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50"
              : "flex justify-end items-end"
          }`}
        >
          <Icon icon="basil:search-outline" />
          <Icon icon="ion:cart" />
        </div>

        {/* Get Started/Login button */}
        <div
          className={`flex items-center justify-center  ${
            isMenuOpen
              ? "block fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50"
              : "hidden md:block"
          }`}
        >
          <button>
            {userid !== null && userid !== "" ? (
              <UserDropdown user={user} userdata={userdata} />
            ) : null}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navber;

const UserDropdown = ({ user, userdata }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);

  const router = useRouter();
  const dropdownRef = useRef(null);

  function getFirstCharacter(str) {
    if (str !== null && typeof str === "string" && str.length > 0) {
      return str.charAt(0); // Returns the first character of the input string
    } else {
      return ""; // Return an empty string if the input is null or empty
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const logout = () => {
    setIsLoading1(true);
    router.push("/Login");
    localStorage.removeItem("_id");
    localStorage.removeItem("current_user");
  };

  //  const data = JSON.stringify(userdata);

  return (
    <div
      style={{ fontFamily: "-moz-initial" }}
      className="relative inline-block text-left"
    >
      {user.resturantname ? (
        <>
          <div
            onClick={toggleDropdown}
            className="  bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none rounded-full w-[40px] h-[40px] p-3 relative ml-4 "
          >
            <p className="text-white text-sm text-center relative uppercase ">
              {getFirstCharacter(user?.resturantname || "")}
            </p>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={toggleDropdown}
            className="  bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none rounded-full w-[40px] h-[40px] p-3 relative ml-4 "
          >
            <p className="text-white text-sm text-center relative uppercase ">
              {getFirstCharacter(user?.username || "")}
            </p>
          </div>
        </>
      )}

      {/* drpdown content */}

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 z-10 mt-2 w-[400px] h-auto p-3   origin-top-right rounded-3xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div
            className="relative float-right hover:bg-gray-200 p-3 hover:rounded-full "
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-black cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="py-1" role="none">
            <div className="items-center m-auto  bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none rounded-full w-[80px] h-[80px] p-3 mt-[30px]">
              <p className="text-white text-4xl text-center relative uppercase mt-2">
                {user.resturantname ? (
                  <>{getFirstCharacter(user?.resturantname || "")}</>
                ) : (
                  <>{getFirstCharacter(user?.username || "")}</>
                )}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sml text-black text-center">
                Managed By Dine_Qr
              </p>
              <p className="text-2xl text-black text-center">
                Hi, 
                {user.resturantname ? (
                  <>{user?.resturantname}! </>
                ) : (
                  <>{user?.username}!</>
                )}
              </p>
              <p className="text-center text-black text-lg ml-7 font-semibold  mt-2">
                {user.email}
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={logout}
                className="w-[300px] h-[50px] mb-10  text-white shadow-lg font-bold transition rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none text-xs  cursor-pointer relative  transform  motion-ease-in-out motion-duration-300 hover:scale-105 active:scale-95 m-2   hover:shadow-xl "
              >
                {isLoading1 ? (
                  <div className="flex gap-1 justify-center items-center text-white text-xs ">
                    <Ring
                      size={15}
                      lineWeight={5}
                      speed={2}
                      className="mt-1"
                      color="white"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center text-white">
                    Log Out
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
