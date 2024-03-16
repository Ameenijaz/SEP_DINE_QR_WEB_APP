'use client'
import React, { useState, useRef } from "react";
import QRCode from 'qrcode.react';
import '../global'
import { IoFastFoodSharp, IoQrCode } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export const QRCodeGenerate = () => {
  const [url, setUrl] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');



  const generateQRCode = () => {
    // Basic URL validation
    if (!url) {
      toast.error('Please enter a URL.');
    } else if (!isValidUrl(url)) {
      toast.error('Invalid URL. Please enter a valid URL.');
    } else {
  
      setQrCodeValue(url);
    }
  };

  // Function to check if the entered string is a valid URL
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const deleteQRCode = () => {
    setQrCodeValue('');
  };



  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode-canvas');
  
    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }
  
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
  
    if (!url) {
      console.error("Failed to get data URL from canvas.");
      return;
    }
    a.href = url;
    a.download = 'qrcode.png';
    a.click();
    toast.success("Qr_Code Download sucessfully!")
    setUrl('');
    setQrCodeValue('');
  };
  


  return (
    <main className="w-full h-full flex justify-center items-center" >
      <ToastContainer/>
            <div className=" w-[450px] h-[610px]  shadow-lg  mt-10 mb-10 flex-col justify-center items-center 
bg-white rounded-lg ">

<div className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none  py-4 shadow-md flex gap-3 justify-center items-center'  >
          <IoQrCode className="w-7 h-7 text-white" />
          <h1 className="text-2xl font-semibold   text-white">QR_Code Generator</h1>
        </div>

        <div className=" rounded-lg z-10 p-5 mt-10">
          <form>
        
            <div className="flex flex-col space-y-10" >


              <div className="relative flex flex-col w-full ">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder=" "
                  autoFocus
                  className="relative z-10 border-0 border-b-2 border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
                />
                <label className="absolute text-sm transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
                  Past Website Url
                </label>
              </div>
            </div>

            {qrCodeValue ? (
              <div className="p-10 flex flex-col items-center mb-5 mt-5 gap-2 bg-white shadow-md border border-gray-200 text-gray-500 rounded-xl
              cursor-pointer" >
                <QRCode value={qrCodeValue} size={128} id="qrcode-canvas"  />

                <button onClick={downloadQRCode} type="button" className="text-red-500 mt-2 underline cursor-pointer">
                  Download QRCode
                </button>
                <button onClick={deleteQRCode} type="button" className="text-red-500 mt-2 underline cursor-pointer">
                  Delete QRCode
                </button>
              </div>
              
            ) : (

              <div className="p-20 flex flex-col items-center mb-5 mt-5 gap-2 bg-white shadow-md border border-gray-200 text-gray-500 rounded-xl
    cursor-pointer">
                <IoQrCode className="w-6 h-6" />
                <span>Show Your QRCode Here....</span>
                <input type="file" className="hidden" />
              </div>
            )

            }


            <button onClick={generateQRCode} type="button" class=" mt-20 text-white shadow-lg font-bold transition   bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-nonefont-medium rounded-lg text-sm px-5 w-full py-4 text-center mr-2 mb-2 flex justify-center">
              <IoQrCode className='w-5 h-5 text-white mx-4' />
              Generate QRCode</button>
          </form>
        </div>
      </div>
      </main>

  );
}


        {/* <div className="absolute w-[450px] h-[510px]
  bg-gradient-to-r from-red-500 via-red-500
  to-transparent -top-[50%] -left-[50%]
  animate-spin-slow origin-bottom-right ">
        </div>

        <div className="absolute w-[450px] h-[510px]
  bg-gradient-to-r from-red-500 via-red-500
  to-transparent -top-[50%] -left-[50%]
  animate-spin-delay origin-bottom-right ">
        </div> */}
