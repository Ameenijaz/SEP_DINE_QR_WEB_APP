"use client"
import React, { useEffect, useState, useRef } from 'react';
import { BiSearchAlt2, BiSolidImage } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ServiceUrl } from "../global"
import Navber from '../Navbar/page';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SideBar } from './Admin_sidebar';
import { QRCodeGenerate } from '../QRCode/Qrcode';
import { Customrize_Menufood } from "./Custom_menu";
import { IoFastFoodSharp } from "react-icons/io5";
import { ShowOrder } from './ShowOrder';
const Admin = () => {

  return (
    <main>
      <Navber/>
      <AddFood/>
    </main>
  );
}

export default Admin;


function AddFood() {

  const [selectedTab, setSelectedTab] = useState("Add Products"); // State to manage selected tab

  function handleTab(tab) {
    setSelectedTab(tab);
    console.log("tab:", tab);
  }



  return (
    <div className="flex h-full md:flex-row  w-full " style={{fontFamily:'-moz-initial'}}  >
      <ToastContainer />
      <SideBar onSetTab={handleTab} />
      <div className="flex-1 flex flex-col w-full h-full contact-warp ">

        <div className='flex gap-2 text-white  p-5'>
          <h1 className='font-bold' >Admin/</h1>
          <p>{selectedTab}</p>
        </div>

        {selectedTab === "Add Products" && <AddProducts/>}
        {selectedTab === "Generate Qr_Code" && <QRCodeGenerate/>}
        {selectedTab === "Customrize MenuItems" &&
          <div className='p-10' >
            <div className='bg-white shadow-lg rounded-lg'>
              <Customrize_Menufood />
            </div>
          </div>
        }
         {selectedTab === "Order" &&
          <div className='min-h-screen w-full p-10 ' >
           <ShowOrder/>
          </div>
        }

      </div>
    </div>
  );
}



const AddProducts = () => {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [categories, setCategory] = useState("");
  const [file, setFile] = useState([]);
  const fileInputRef = useRef();
  const [previewImages, setPreviewImages] = useState([]);


  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));

    // Clear the previously selected files
    setFile([]);
    setPreviewImages([]);

    setPreviewImages(newImages);
    toast.success("upload Image successfully");

    setFile([...files]);
  };

  // console.log(category);
  const handleSubmit = async () => {
    // setIsLoading(true);

    if (foodName && description && price && caloriesBurned && categories) {
      const formData = new FormData();
      formData.append("price", price);
      formData.append("food_name", foodName);
      formData.append("description", description);
      formData.append("calories_burned", caloriesBurned);
      formData.append("categories", categories);

      file.forEach((image) => {
        formData.append("imagefiles", image);
      });

      try {
        const response = await fetch(`${ServiceUrl}/AddFoodItems`, {
          method: "POST",
          body: formData,
        });

        if (response.status === 200) {
          setSuccess(true);
          toast.success("Item added successfully!");
          setFoodName("");
          setDescription("");
          setPrice("");
          setCaloriesBurned("");
          setCategory("");
          setFile([]);
          setPreviewImages([]);
        } else {
          setSuccess(false);
          // setError("Error uploading file.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        // setError("Error uploading file.");
      }
    } else {
      toast.error("Please fill in all required fields.");
    }

    // setIsLoading(false);
  };


  return (
    <main className='h-full w-full flex justify-center items-center '  >
      <div className="bg-white w-[600px] h-auto shadow-lg rounded-lg  mt-10 mb-10 flex-col justify-center items-center ">
        <div className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none  py-4 shadow-md flex gap-3 justify-center items-center'  >
          <IoFastFoodSharp className="w-7 h-7 text-white" />
          <h1 className="text-2xl font-semibold   text-white"  >Add Your Food Item In Menu</h1>
        </div>
        <div className='p-5' >
          <div className="mb-4">
            <label htmlFor="foodName" className="block mb-2 text-sm font-bold text-gray-600">
              Food Name*
            </label>

            <div className="px-3 py-3 rounded-xl bg-white  border border-emerald-200">

              <input
                type="text"
                id="foodName"
                name="foodName"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="w-full px-2 rounded-lg     focus:outline-none border-transparent "
                placeholder="Type foodname"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm mb-2 font-bold text-gray-600">
              Description*
            </label>
            <div className="px-1 py-1 rounded-xl bg-white  border border-emerald-200">

              <textarea

                id="description"
                name="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-2 rounded-lg focus:outline-none border-transparent "
                placeholder="type a discription"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-600">
              Price*
            </label>
            <div className="px-3 py-3 rounded-xl bg-white  border border-emerald-200">

              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-2 rounded-lg     focus:outline-none border-transparent "
                placeholder="Type Price"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="caloriesBurned" className="block text-sm font-bold mb-2 text-gray-600">
              Calories Burned*
            </label>
            <div className="px-3 py-3 rounded-xl bg-white  border border-emerald-200">

              <input
                type="number"
                id="caloriesBurned"
                name="caloriesBurned"
                value={caloriesBurned}
                onChange={(e) => setCaloriesBurned(e.target.value)}
                className="w-full px-2 rounded-lg     focus:outline-none border-transparent "
                placeholder="Type Burned calories"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="categories" className="block text-sm  font-bold mb-2 text-gray-600">
              Categories*
            </label>
            <select
              id="categories"
              name="categories"
              value={categories}
              onChange={(e) => setCategory(e.target.value)}
              className="border-emerald-300 border-b-4 m-4  p-2 w-full text-sm gap-2  focus:outline-none  "
              required
            >
              <option value="">Select Categories</option>
              <option value="Fast Food" >Fast Food</option>
              <option value="Desserts">Desserts</option>
              <option value="Breakfast Foods">Breakfast Foods</option>
              <option value="Vegetarian/Vegan">Vegetarian/Vegan</option>
            </select>
          </div>

          <label className="block text-gray-900 text-sm font-semibold">Upload Your Images*</label>

          <div className="flex gap-5 w-[50%] mt-3">
            <button
              onClick={() => {
                fileInputRef.current.click();
              }}
              type="button"
              className="flex gap-2 text-white  bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none  font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2"
            >
              <BiSolidImage className="w-4 h-4" />
              Upload Image
            </button>
          </div>

          <input
            type="file"
            accept="image/*"
            multiple
            name="imagefiles"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
          <div className="flex flex-wrap gap-4 mt-4">
            {previewImages.map((imageUrl, index) => (
              <div key={index} className="w-32 h-32 relative">
                <img
                  src={imageUrl}
                  alt={`Uploaded Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  className="absolute top-0 right-0 text-white mt-2  bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none  font-medium rounded-lg text-sm px-4 py-2 opacity-30 hover:opacity-100 text-center mr-2 mb-2"
                  onClick={() => {
                    const updatedImages = [...previewImages];
                    updatedImages.splice(index, 1);
                    setPreviewImages(updatedImages);
                  }}
                >
                  <RiDeleteBin6Line className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleSubmit} type="button"
            className="w-full py-4   bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none  text-white p-2
       rounded  font-medium text-sm ">
            Save
          </button>
        </div>
      </div>
    </main>
  );
}