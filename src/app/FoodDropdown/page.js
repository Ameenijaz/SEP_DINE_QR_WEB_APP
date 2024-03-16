"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Foodcount from "../FoodCount/page";
import { useRouter } from "next/navigation";
import { AddToCart, FetchCartItemsById } from "../action/addtocartitems";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Ring } from "@uiball/loaders";
import { ServiceUrl } from "../global";


const FAQ = ({ faqData }) => {
  const [userid, setUserid] = useState('')
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [count, setCount] = useState(1);
  const [clickd, setClicked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValues, setSelectedValues] = useState({
    name: null,
    price: null,
    total: null,
    quantity: null,
    message: null,
  });

  const router = useRouter()
  useEffect(() => {
    // console.log("faqData:",faqData);
    var _id = localStorage.getItem("_id")
    setUserid(_id)
  }, [userid])


  const faqs = [
    {
      name: "Roti Or Naan",
      price: 4,
      totalPrice: 4,
    },
    {
      name: "saled",
      price: 5,
      totalPrice: 5,
    },
    {
      name: "Drink",
      price: 8,
      totalPrice: 8,
    },

    // Add more FAQ items here
  ];
  const toggleAnswer = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };


  async function GotoCartPage() {
    setIsLoading(true);
    if (userid) {
      try {
        const response = await AddToCart(
          faqData.food_name,
          faqData.description,
          faqData.price,
          faqData.calories_burned,
          faqData.categories,
          selectedValues.name, // Replace with the actual data
          selectedValues.price,
          selectedValues.total,
          selectedValues.quantity,
          selectedValues.message,
          faqData.images,
          userid, // Replace with the actual user ID
        );

        console.log("Add To Cart Successfully!", response); // Message from the server
        toast.success("Add To Cart Successfully!");
        setIsLoading(false);
        router.push("/AddToCart");
      } catch (error) {
        console.error(error);
        toast.error(error);
        setIsLoading(false);
      }

    } else {
      router.push("/Login")
    }
    // Update selected values in console
  };






  return (
    <div className="Food-fqa-warp w-[400px]" style={{ fontFamily: '-moz-initial' }}>
      <ToastContainer />
      <h2 className="font-bold text-2xl mb-[10px]">Ingredients</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <div onClick={() => toggleAnswer(index)}>
              <div className="Foodfqa-heading-sec">
                <div className="Foodfqa-heading ">
                  {index === expandedIndex ? (
                    <Icon icon="iconamoon:arrow-down-2-duotone" />
                  ) : (
                    <Icon icon="iconamoon:arrow-right-2-duotone" />
                  )}
                  <h3>{faq.name}</h3>
                </div>
                <div className="Foodfqa-oder-icon">
                  <Icon
                    icon="gg:check-o"
                    style={{
                      color: clickd.includes(index) ? 'red' : 'black',
                    }}
                  />
                </div>
              </div>
            </div>
            {expandedIndex === index && (
              <div className="foodfqaAnwar">
                <div className="foodfqadateils ">
                  <span className="Food-Quti">Quantity</span>
                  <Foodcount itemCount={(count) => setCount(count)} />
                </div>
                <div className="foodfqadateils ">
                  <span className="Food-Price">Price</span>
                  <p>{`$${faq.price}`}</p>
                </div>
                <div className="foodfqadateils ">
                  <span className="Food-Price ">Total Price</span>
                  <p>{`$${faq.price * count}`}</p>
                </div>
                <form action className="text-input">
                  <textarea
                    className="wpcf7-form-control p-3  food-textarea wpcf7-textarea wpcf7-validates-as-required"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Message"
                    name="cf_text"
                    onChange={(e) =>
                      setSelectedValues({
                        ...selectedValues,
                        message: e.target.value,
                      })
                    }
                  ></textarea>
                </form>
                <div className="foodfqabtn mb-3 transition-transform hover:scale-105 duration-500 ">
                  <button
                    onClick={() => {
                      if (clickd.includes(index)) {
                        setClicked((prev) => [...prev]);
                      } else {
                        setClicked((prev) => [...prev, index]);
                      }
                      toggleAnswer(index);
                      setSelectedValues({
                        name: faq.name,
                        price: faq.price,
                        total: faq.price * count,
                        quantity: count,
                        message: selectedValues.message,
                      });
                    }}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
        <div
          onClick={() => { GotoCartPage(); }}
          className="transition-transform hover:scale-105 duration-500 mt-10 w-full text-white font-medium text-center py-4 rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none "
        >
          <button >
            {isLoading ? (
              <div className="flex gap-1 justify-center items-center text-blue-600 text-xs" >
                <Ring
                  size={25}
                  lineWeight={5}
                  speed={3}
                  className="mt-1"
                  color="white"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center" >
                Add To Bucket
              </div>
            )}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default FAQ;
