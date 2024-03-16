'use client'

import Link from "next/link";
import React, { useState } from 'react';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ServiceUrl } from "../../app/global";
import { BiMailSend } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { Ring } from "@uiball/loaders";
import { useRouter } from "next/navigation";
import { IoMdCard } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';

const SignUp = () => {
  const [resturantname, setResturantname] = useState("");
  const [phonenum, setPhoneNum] = useState("");
  const [cnic, setCNIC] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState(""); 
  const router =  useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [userType, setUserType] = useState("Admin");
 
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  const handleSignUp = async () => {
    setIsLoading(true); // Set loading to true when the button is pressed
  
      const res = await fetch(`${ServiceUrl}/Emailcheck/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data1 = await res.json();
      if (data1["status"] === 200) {
        toast.success("Account Already Exist");
      } else {
        try {

          const isEmailField = userType === "User"; // Check if the user type is "User"
          const formData = isEmailField
            ? { username: username, email: email ,userType:userType }
            : { resturantname: resturantname, phonenum: phonenum, cnic: cnic, email: email ,userType:userType };
      

          const response = await fetch(`${ServiceUrl}/Verification_SignUp`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
  
          const data = await response.json();
          console.log(data); // Check the response from the API
          if (data["status"] === 200 ) {
            toast.success(`Verify Your Email we send mail on ${email}`);
           
          } else if (data["status"] === 400) {
            toast.error("Enter Valid Email");
      
          }
          // You can handle the response here and show appropriate messages to the user
        } catch (error) {
          toast.error("Error signing up:", error);
        }
      }
    
  
    setIsLoading(false); // Set loading to false after the condition checks are complete
  };
  

// console.log(userType);
 
return( 
  <div className="flex  justify-center min-h-screen bg-gray-100 " style={{fontFamily:'-moz-initial'}} >
    {showModal && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <p className="text-sm font-semibold mb-4 text-gray-500">
              Are you signing up as an admin or a regular user?
            </p>
            <div className="flex gap-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setUserType("Admin");
                  setShowModal(false);
                }}
              >
                Admin
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setUserType("User");
                  setShowModal(false);
                }}
              >
                User
              </button>
            </div>
          </div>
        </div>
      )}
   
    <div className="bg-white px-10 p-3 rounded-lg shadow-lg w-[500px]   h-auto ">
    <div className=" flex justify-center  " >
  <img src="/logo.png" className="w-[150px] h-[150px] " />
  </div>

    <h2 className="text-3xl font-semibold mb-4  text-center text-gray-700 ">Signup</h2>


      <form>

      {userType === "Admin" ? (
     <>  
      <div className="relative flex flex-col">
      <span className="absolute right-2 top-2">
     <BsPerson className="w-4 h-4 text-blue-500" />
    </span>
    <input
        id="resturant"
        type="text"
        value={resturantname}
        onChange={(e) => setResturantname(e.target.value)}
        placeholder=""
       autoFocus
      className="relative z-10 border-0 border-b-2 text-sm border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
    />
    <label className="absolute text-sm  transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
     Resturant Name*
    </label>
  </div>

        <div className=" mt-10">
        <div className="relative flex flex-col">
        <span className="absolute right-2 top-2">
     <FiPhoneCall className="w-4 h-4 text-blue-500" />
    </span>
    <input
      id="phone Number"
      type="text"
      value={phonenum}
      onChange={(e) => setPhoneNum(e.target.value)}
     placeholder=""
      autoFocus
      className="relative z-10 border-0 border-b-2 border-blue-500 text-sm h-10 bg-transparent text-gray-900 outline-none px-2 peer"
    />
    <label className="absolute  text-sm transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
      phone Number*
    </label>
  </div>  
        </div>
        <div className=" mt-10">
        <div className="relative flex flex-col">
        <span className="absolute right-2 top-2">
     <IoMdCard className="w-4 h-4 text-blue-500" />
    </span>
    <input
      id="cnic"
      type="text"
      value={cnic}
      onChange={(e) => setCNIC(e.target.value)}
     placeholder=""
      autoFocus
      className="relative z-10 border-0 border-b-2 border-blue-500 text-sm h-10 bg-transparent text-gray-900 outline-none px-2 peer"
    />
    <label className="absolute  text-sm transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
     CNIC Number*
    </label>
  </div>  
        </div>
       </>
        ): null}
  {userType === "User" ? (
        <div className=" mt-10">
        <div className="relative flex flex-col">
        <span className="absolute right-2 top-2">
     <BiMailSend className="w-4 h-4 text-blue-500" />
    </span>
    <input
      id="email"
      type="text"
      value={username}
      onChange={(e) => setUserName(e.target.value)}
     placeholder=" "
      autoFocus
      className="relative z-10 border-0 border-b-2 border-blue-500 text-sm h-10 bg-transparent text-gray-900 outline-none px-2 peer"
    />
    <label className="absolute  text-sm transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
       UserName*
    </label>
  </div>  
        </div>
        ):null}
  
  
        <div className=" mt-10">
        <div className="relative flex flex-col">
        <span className="absolute right-2 top-2">
     <BiMailSend className="w-4 h-4 text-blue-500" />
    </span>
    <input
      id="email"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     placeholder=" "
      autoFocus
      className="relative z-10 border-0 border-b-2 border-blue-500 text-sm h-10 bg-transparent text-gray-900 outline-none px-2 peer"
    />
    <label className="absolute  text-sm transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
      Email Address*
    </label>
  </div>  
        </div>
       
       
        <button onClick={handleSignUp} type="button" className="mt-10 w-full text-white 
        bg-gradient-to-r from-red-500 via-blue-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80
          font-medium rounded-lg text-sm  py-3.5 text-center mr-2 mb-2">
            {isLoading ? (
                <div className="flex gap-1 justify-center items-center text-blue-600 text-sm " >
                  <Ring
                    size={15}
                    lineWeight={5}
                    speed={2}
                    className="mt-1"
                    color="white"
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center" >
            Sign Up
                </div>
              )}
            </button>
 
      </form>

      
      <div className="flex gap-2 mt-4 justify-center">
      <p className="text-center  text-sm text-gray-600">
      Already have an account?
       
      </p>
      <Link className="text-red-600 text-sm hover:text-red-800 hover:underline" href={"/Login"}>
      Sign In
        </Link>
        </div>
      

    </div>
    
    <ToastContainer  />
  </div>
  
  
  )
};

export default SignUp;
