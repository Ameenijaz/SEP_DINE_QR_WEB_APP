"use client";
import React, { useEffect, useState } from "react";
import { ServiceUrl } from "../global";
import FAQ from "../FoodDropdown/page";
import { GrFormClose } from "react-icons/gr";
import { IoFastFoodSharp, IoQrCode } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { Ring } from "@uiball/loaders";
// import "./layout.css";

export  function Customrize_Menufood() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${ServiceUrl}/FetchFoodItem`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setImages(data["Productdata"]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleCardClick = (item) => {
    // console.log('Selected Item:', item);
    setSelectedCardIndex(item);
    const selected = item;
    // console.log('Selected Item:', selected);
    setSelectedItem(selected);
  };

  // const handleCardClick = (index) => {
  //   setSelectedCardIndex(index);
  //   setSelectedItem(images[index]); // Set the selected item based on the clicked card
  // };

  // console.log("selectedItem:",selectedItem)

  const handleCardClose = () => {
    setSelectedCardIndex(null);
    setSelectedItem(null);
  };

  const filterCardsByCategory = (categories) => {
    return images.filter((item) => item.categories === categories);
  };

  // function debounce(func, wait) {
  //   let timeout;
  //   return function() {
  //     const context = this;
  //     const args = arguments;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       func.apply(context, args);
  //     }, wait);
  //   };
  // }

  // window.addEventListener('scroll', debounce(yourScrollFunction, 200));

  return (
  <main>
    <div className="">
    
<div className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none mb-10 py-5 rounded-tr-lg rounded-tl-lg shadow-md flex gap-3 justify-center items-center'  >
        <IoFastFoodSharp className="w-7 h-7 text-white" />
        <h1 className="text-2xl font-semibold   text-white" style={{fontFamily:'-moz-initial'}} >Dishes Categories</h1>
      </div>
      <div className="Menufood-contaner" style={{fontFamily:'-moz-initial'}} >
    
        <div className="Menufood-Dishes-main">
          <div className="ml-10 bg-gray-100 rounded-tr-full rounded-br-full p-4 w-[300px] flex gap-2 justify-center items-center"> 
                        <MdFastfood className="w-7 h-7 text-red-600"/>
          <h1 className="text-xl font-sans font-bold ">Fast Food</h1>
          </div>

          <div className="Menufood-Drinks-card-main w-full h-full">
           {isLoading ? (
              <div className="flex gap-1 justify-center items-center text-gray-500 text-sm">
                <Ring
                  size={35}
                  lineWeight={5}
                  speed={4}
                  className="mt-1"
                  color="red"
                />
                <span>please Wait</span>
              </div>
           ):(
            filterCardsByCategory("Fast Food").map((item, index) => (
              <Card
                onClick={() => handleCardClick(item)}
                key={index}
                item={item}
                index={index}
                isSelected={selectedCardIndex === index}
              />
            ))
           )}
            
          </div>

<div className="ml-10 bg-gray-100 rounded-tr-full rounded-br-full p-4 w-[300px] flex gap-2 justify-center items-center"> 
                        <MdFastfood className="w-7 h-7 text-red-600"/>
          <h1 className="text-xl font-sans font-bold ">Desserts</h1>
          </div>
          
          <div className="Menufood-Drinks-card-main w-full h-full ">
            
           {isLoading ? (
              <div className="flex gap-1 justify-center items-center text-gray-500 text-sm">
                <Ring
                  size={35}
                  lineWeight={5}
                  speed={4}
                  className="mt-1"
                  color="red"
                />
                <span>please Wait</span>
              </div>
           ):(
            filterCardsByCategory("Desserts").map((item, index) => (
              <Card
                onClick={() => handleCardClick(item)}
                key={index}
                item={item}
                index={index}
                isSelected={selectedCardIndex === index}
              />
            )))}
          </div>


          <div className="ml-10 bg-gray-100 rounded-tr-full rounded-br-full p-4 w-[300px] flex gap-2 justify-center items-center"> 
                        <MdFastfood className="w-7 h-7 text-red-600"/>
          <h1 className="text-xl font-sans font-bold ">Breakfast Foods</h1>
          </div>
          <div className="Menufood-Drinks-card-main w-full h-full ">
            
           {isLoading ? (
              <div className="flex gap-1 justify-center items-center text-gray-500 text-sm">
                <Ring
                  size={35}
                  lineWeight={5}
                  speed={4}
                  className="mt-1"
                  color="red"
                />
                <span>please Wait</span>
              </div>
           ):(
            filterCardsByCategory("Breakfast Foods").map((item, index) => (
              <Card
                onClick={() => handleCardClick(item)}
                key={index}
                item={item}
                index={index}
                isSelected={selectedCardIndex === index}
              />
            )))}
          </div>

          <div className="ml-10 bg-gray-100 rounded-tr-full rounded-br-full p-4 w-[300px] flex gap-2 justify-center items-center"> 
                        <MdFastfood className="w-7 h-7 text-red-600"/>
          <h1 className="text-xl font-sans font-bold ">Vegetarian/Vegan</h1>
          </div>
          <div className="Menufood-Drinks-card-main w-full h-full ">
            
           {isLoading ? (
              <div className="flex gap-1 justify-center items-center text-gray-500 text-sm">
                <Ring
                  size={35}
                  lineWeight={5}
                  speed={4}
                  className="mt-1"
                  color="red"
                />
                <span>please Wait</span>
              </div>
           ):(
            filterCardsByCategory("Vegetarian/Vegan").map((item, index) => (
              <Card
                onClick={() => handleCardClick(item)}
                key={index}
                item={item}
                index={index}
                isSelected={selectedCardIndex === index}
              />
            )))}
          </div>
        </div>
      </div>
      {selectedCardIndex !== null && selectedItem && (
        <Foodpopu item={selectedItem} onClose={handleCardClose} />
      )}
    </div>
  </main>
);
}

const Card = ({ item, index, isSelected, onClick }) => {

var sortdescription = item.description.substring(0,80);

return(
<div
  className={`Menufood-card bg-gray-100 border border-gray-200 ${isSelected ? "selected" : ""}`}
  onClick={onClick}
>
  <img
  className="Menufood-card-img"
    src={`${ServiceUrl}/AddFoodItems/?filename=${item.images[0]["name"]}`}
    alt={item.images[0]["name"]}
    loading="lazy"
  />
  <h3 className="text-gray-500 font-sans text-xl font-bold pt-[75px]" >{item.food_name}</h3>
  <p>
    {sortdescription}
  </p>
  <div className="Menufood-price">
   <div className="flex gap-1" >
   <span><FaRupeeSign className="text-gray-600 w-5 h-5" /></span>
    <span>{item.price}</span>
    </div>
    <div className="flex gap-1" >
    <span> <img src="/meal.png" className=" w-5 h-5" /></span>
    <span>{item.calories_burned}</span>
    </div>
  
  </div>
</div>
)
}


const Foodpopu = ({ onClose, item }) => {


  return (
    <div className="fixed w-[800px] h-auto overflow-hidden overflow-y-auto custom-scrollbar top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative  bg-white border  border-emerald-200 p-4 rounded-md shadow-lg backdrop-blur-lg ">
        <div
          className="absolute top-0 right-0 cursor-pointer p-1 rounded-full bg-white shadow-md"
          onClick={onClose}
        >
          <GrFormClose className="w-6 h-6 text-red-700" />
        </div>
        <div className="main-popu-flex flex ">
          <div className="flex-shrink-0 max-w-full max-h-96  h-full">
            <img
              className="w-[400px] h-[300px] object-cover"
              src={`${ServiceUrl}/AddFoodItems/?filename=${item.images[0]["name"]}`}
              alt={item.images[0]["name"]}
              loading="lazy"
            />
          <div className="text-center">
              <h2 className="text-xl font-serif mt-3 font-semibold">
                {item.food_name}
              </h2>
            </div>
          </div>
          
          <div>
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

