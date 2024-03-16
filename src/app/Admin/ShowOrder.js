"use client"
import React,{ useEffect,useState } from 'react';
import { Ring } from '@uiball/loaders';
import { BiSolidMinusCircle } from 'react-icons/bi';
import { GetOrders, updateOrderInDatabase } from '../action/addtocartitems';
import { FaCheck, FaSpinner } from 'react-icons/fa';

export const ShowOrder = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [updatingOrderId, setUpdatingOrderId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [foodNamesDropdown, setFoodNamesDropdown] = useState(false);
    const [categoriesDropdown, setCategoriesDropdown] = useState(false);
    const [names,setName] = useState('');
    const [firstCategory, setFirstCategory] = useState('');
    const [categories_dropdown,setCategoryDropdown]=useState(false);
    
    useEffect(()=>{
      FetchOrders();
    },[])

    async function FetchOrders() {
        try {
          setIsLoading(true);
          // Fetch orders from the API
          const allOrders = await GetOrders();
             console.log("allOrders.getorder",allOrders.getorder);
      
          // Set the orders in state
          setOrders(allOrders.getorder);
          // const namedata = allOrders.getorder[0]['cart_items']
          // setName(namedata);
          // if (namedata.length > 0) {
          //   setFirstFoodName(namedata[0].food_name);
          //   setFirstCategory(namedata[0].categories);
          // }else{
          //   console.log("error");
          // }
          //   const data =  namedata.map((item)=>   item.food_name);
        //   console.log("data",data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        } finally {
          setIsLoading(false);
        }
      }

      const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second:'numeric',
            hour12: true,
        });
    };
    const formatDateTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };

// const  handleopen=()=>{
// setDropdownname(!food_name_dropdown);
// }

const handleOpen = (foodName) => {
  setSelectedItem(foodName);
  setFoodNamesDropdown(!foodNamesDropdown);
};

const  handlecaetgory=()=>{
    setCategoryDropdown(!categories_dropdown);
    }
    
      const handleUpdateOrder = async (orderId) => {
        try {

            console.log("orderId",orderId);

          setUpdatingOrderId(orderId);
    
          // Perform the update in the database, replace the following line with your update logic
          const status_check = await updateOrderInDatabase(orderId);
          console.log("status_check:",status_check);
          // Update the state or refetch orders if needed
    
        } catch (error) {
          console.error('Error updating order:', error);
        } finally {
          setUpdatingOrderId(null);
        }
      };



  return (
    <main style={{ fontFamily: '-moz-initial' }}>
      <div className="bg-white p-4 rounded shadow-md h-[600px] transition-transform hover:scale-105">
        <div className="flex justify-between">
          <h1 className="text-red-600 font-bold text-3xl border-b-2 border-gray-200">Orders</h1>
          <p onClick={() => FetchOrders()}>Refresh</p>
        </div>

        <div>
          <div className="bg-white mt-4 w-full shadow-lg overflow-hidden rounded-lg h-[390px]">
            <div className="h-[60px] w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none px-8 justify-center flex items-center rounded-tl-lg rounded-tr-lg ">
              <ul className="flex justify-between w-[100%]">
                <div className="flex justify-between w-[25%]">
                  <li className="font-bold font-sans text-white text-xs">No</li>
                  <li className="font-bold font-sans w-full flex justify-center mr-2 text-white text-xs">Name</li>
                </div>
                <li className="font-bold font-sans px-5 text-white text-start text-xs w-[15%]">Category</li>
                <li className="font-bold font-sans px-5 text-white text-start text-xs w-[15%]">Order Time</li>
                <li className="font-bold font-sans px-5 text-white text-start text-xs w-[15%]">Order Date</li>
                <li className="font-bold font-sans px-5 text-white text-start text-xs w-[10%]">Order Total</li>
                <li className="font-bold font-sans px-5 text-white text-start text-xs w-[10%]">Order Status</li>
                <li className="font-bold font-sans text-white text-end text-xs w-[10%]">Actions</li>
              </ul>
            </div>

            <div className="custom-scrollbar mb-10" style={{ overflowY: 'auto', height: '340px' }}>
              <ul>
                {isLoading ? (
                  <div className="flex justify-center items-center mt-[150px]">
                    <Ring size={20} lineWeight={5} speed={2} className="mt-1" color="red" />
                  </div>
                ) : orders.length === 0 ? (
                  <div className=" flex justify-center font-sans items-center mt-[100px] text-red-800">
                    No User Founded.
                  </div>
                ) : (
                  <>
                    {orders.map((order, orderIndex) => (
                      <div key={orderIndex}>
                        {order.cart_items.map((cartItem, cartIndex) => (
                          <div key={cartIndex}>
                            <div className="flex justify-between h-auto shadow px-8 w-[100%]">
                              <div className="flex justify-between py-6 w-[25%]">
                                {/* No */}
                                <li className="font-bold font-sans text-black text-xs">{cartIndex + 1}</li>
                                {/* UserName */}
                                <li className="font-bold font-sans flex gap-2 justify-center w-full px-1 text-black text-xs break-words">
                                  <button onClick={() => handleOpen(cartItem.food_name)} className="text-gray-400 text-sm text-center relative uppercase">
                                    {cartItem.food_name}
                                  </button>

                                  {foodNamesDropdown && selectedItem === cartItem.food_name && (
                                    <div className="dropdown absolute bg-white border border-gray-300 mt-5 py-2 px-4 rounded shadow">
                                      <ul>
                                        {order.cart_items.map((item, index) => (
                                          <li key={index}>{item.food_name}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </li>
                              </div>
                              {/* Category */}
                              <div className="flex justify-start py-6 px-5 w-[15%]">
                                <li onClick={() => handleOpen(cartItem.categories)} className="font-sans text-black text-xs break-words">
                                  {cartItem.categories}
                                </li>
                                {foodNamesDropdown && selectedItem === cartItem.categories && (
                                  <div className="dropdown absolute bg-white border border-gray-300 mt-5 py-2 px-4 rounded shadow">
                                    <ul>
                                      {order.cart_items.map((item, index) => (
                                        <li key={index}>{item.categories}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                              {/* Order Time */}
                              <div className="flex justify-center py-6 px-5 w-[15%]">
                                <li className="font-sans text-black text-xs break-words">{formatTime(cartItem.createdAt)}</li>
                              </div>
                              {/* Order Date */}
                              <div className="flex justify-center py-6 w-[15%]">
                                <li className="font-sans text-black text-xs text-center break-words">{formatDateTime(cartItem.createdAt)}</li>
                              </div>
                              <div className="flex justify-center py-6 px-5 w-[10%]">
                                <li className="font-sans text-black text-xs text-center break-words">{order.d_total}</li>
                              </div>
                              <div className="flex justify-center py-6 px-5 w-[10%]">
                                <li className="font-sans text-black text-xs break-words">{order.status}</li>
                              </div>
                              {/* Actions */}
                              <div onClick={() => handleUpdateOrder(order.id)} className="flex justify-end py-6 w-[10%] cursor-pointer">
                                <li>
                                  {updatingOrderId === order.id ? (
                                    <Ring size={10} lineWeight={5} speed={2} className="mt-1" color="black" />
                                  ) : order.status === 'pending' ? (
                                    <BiSolidMinusCircle className="w-7 h-7 text-red-600 hover:transform hover:scale-105 transition-transform duration-500" />
                                  ) : (
                                    <FaCheck className="w-7 h-7 text-green-600" />
                                  )}
                                </li>
                              </div>
                            </div>
                            <div className="border border-x h-0.2 w-full bg-slate-50" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

