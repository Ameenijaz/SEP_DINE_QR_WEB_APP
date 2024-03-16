"use client";

import React, { useState } from "react";
import { BiMailSend, BiLock } from "react-icons/bi";
import { ServiceUrl } from "../../app/global";
import Link from "next/link";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { Ring } from "@uiball/loaders";

const Forgetpassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [isloading1, setIsLoading1] = useState(false);
  const [showPasswordFeild, setShowPasswordFeild] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerificationCodeInput, setShowVerificationCodeInput] = useState(false);

  const [verificationcode1, setVerificationCode1] = useState("");


  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const SendEmail = async () => {
    setIsLoading(true)
    if (!isEmailValid(email)) {
      toast.error("Invalid email format");
      console.log("email error");
      setIsLoading(false)
 
      return;
    } else {
      const res = await fetch(`${ServiceUrl}/EmailForgetPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          email: email,

        }),
      });
      const data = await res.json();

      // Set the verificationcode state with the received value
      setVerificationCode1(data['code']);
      if (data["status"] == 200) {
        toast.success("Email Sent successfully");
        setShowVerificationCodeInput(true);
        setIsLoading(false)
      } else if (data["status"] == 400) {
        toast.error("Enter Valid Email");
        setIsLoading(false)
      }
      // You can handle the response here and show appropriate messages to the user
      setIsLoading(false)
 
    }
    setIsLoading(false)
  };

  const handleLogin = () => {
    setIsLoading1(true)
    if (verificationcode1 == verificationCode) {
      setShowPasswordFeild(true);
      setIsLoading1(false)
    } else {
      toast.error('Not Match')
      setIsLoading1(false)
    }
    setIsLoading1(false)
  };


  // set password api 


  const [password, setPassword] = useState(""); // State for the password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State for the confirm password input

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here, you can check if the password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      //  SetNewPassword

      const res = await fetch(`${ServiceUrl}/SetNewPassword`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          email: email,
          password: password
        }),
      });
      const data = await res.json();

      // Set the verificationcode state with the received value
      setVerificationCode1(data['code']);
      if (data["status"] == 200) {

        router.push('/Login')
        toast.success("Password Update successfully");

        setShowVerificationCodeInput(true);
      } else if (data["status"] == 400) {
        toast.error("Error to Update password");
      }


    }
  };







  return (
    <div className="flex justify-center items-center mt-[70px]">
      <ToastContainer />
      <div className=" bg-white p-10 rounded-lg shadow-lg w-96 h-auto">
      <div className=" flex justify-center items-center  " >
  <img src="/logo.png" className="w-[150px] h-[150px] " />
  </div>
        <h2 className="text-2xl font-semibold mb-4 font-sans text-center text-gray-500">
          {showPasswordFeild ? "Set Psssword":(showVerificationCodeInput ? "Verification code" : "Forgot Password") }
        </h2>
        <form>
          {showPasswordFeild ? (
            <>
              <div className="relative flex flex-col mt-10">

                <div
                  className="absolute right-2 top-2 "
                >
                  <BiLock className="w-4 h-4 text-blue-500" />
                </div>
                <input
                  type="text"
                  placeholder=" "
                  autoFocus
                  value={password}
                  onChange={handlePasswordChange}
                  className="relative z-10 border-0 border-b-2 text-xs border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
                />
                <label className="absolute text-xs font-sans transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
                  Enter Password
                </label>
              </div>
              <div className="relative flex flex-col mt-7">

                <div
                  className="absolute right-2 top-2 "
                >
                  <BiLock className="w-4 h-4 text-blue-500" />
                </div>
                <input
                  type="text"
                  placeholder=" "
                  autoFocus
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="relative z-10 border-0 border-b-2 text-xs border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
                />
                <label className="absolute text-xs font-sans transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
                  Enter Confirm Password
                </label>
              </div>

              <button
                onClick={handleSubmit}
                type="button"
                className="mt-10 w-full text-white bg-gradient-to-r from-red-400 via-red-500
     to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800
      font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2"
              >
                Submit
              </button>
            </>
          ) : (
            <>
              {showVerificationCodeInput ? (
                <div className="relative flex flex-col mt-10">
                  <span className="absolute right-2 top-2">
                    <BiLock className="w-4 h-4 text-blue-500" />
                  </span>
                  <input
                    id="verificationCode"
                    type="text"
                    placeholder=" "
                    autoFocus
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="relative z-10 border-0 border-b-2 text-xs border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
                  />
                  <label className="absolute text-xs font-sans transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
                    Enter Verification Code
                  </label>
                </div>
              ) : (
                <div className="relative flex flex-col mt-10">
                  <span className="absolute right-2 top-2">
                    <BiMailSend className="w-4 h-4 text-blue-500" />
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="relative z-10 border-0 border-b-2 text-xs border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
                  />
                  <label className="absolute text-xs font-sans transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
                    Enter Email
                  </label>
                </div>
              )}

              <div>
                {showVerificationCodeInput ? (
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="mt-10  w-full text-white 
                    bg-gradient-to-r from-red-500 via-blue-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80
      font-medium rounded-lg text-sm py-3.5 text-center mr-2 mb-5"
                  >
                    {isloading1 ? (
                      <div className="flex gap-1 justify-center items-center text-blue-600 text-xs " >
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
                        Confirm
                      </div>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={SendEmail}
                    type="button"
                    className="mt-10 w-full text-white 
                    bg-gradient-to-r from-red-500 via-blue-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80
      font-medium rounded-lg text-sm py-3.5 text-center mr-2 mb-2"
                  >
                    {isloading ? (
                      <div className="flex gap-1 justify-center items-center text-blue-600 text-xs " >
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
                        Send Verification Code

                      </div>
                    )}

                  </button>
                )}
              </div>
            </>
          )}
        </form>
        <div className="flex gap-2 mt-4 justify-center">
          <p className="text-center text-sm text-gray-600">
            Don't have an account?
          </p>
          <Link
            className="text-red-600 text-sm hover:text-red-800 hover:underline"
            href={"/Components/Sign_Up"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
