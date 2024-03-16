"use client"
import { useEffect, useState } from "react";
import { FaCommentAlt, FaCubes, FaMoneyBillAlt, FaRupeeSign, FaTrashAlt, FaUtensils } from "react-icons/fa";
import { ServiceUrl } from "../global";
import Navber from "../Navbar/page";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import  {PlaceOrder} from "../action/addtocartitems";


const AddToCartPage = () => {

  const [cartItems, setCartItems] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [userid,setUserid]=useState('');


  useEffect(() => {
  
    const id = localStorage.getItem('_id');
    setUserid(id);
    const fetchCartItems = async () => {
      try {
        const res = await fetch(`${ServiceUrl}/Data`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setCartItems(data);

        console.log(data);
      } catch (error) {
        console.log("Error fetching cart data");
      }
    };

    fetchCartItems();
  }, []);


 // Function to handle item deletion
 const handleDeleteItem = async () => {
  
  
  console.log("itemToDelete",);
   const id = itemToDelete._id;
    try {
      const response = await fetch(`${ServiceUrl}/Data`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         id: id
        }),
      });
      if (response.ok) {
        toast.success("Item deleted successfully");
        setCartItems((prevCartItems) => prevCartItems.filter(item => item._id !== id));
      } else {
        toast.error("Error deleting item:", response.statusText);
      }
    } catch (error) {
      toast.error("Error deleting item:", error.message);
    }  
   setShowDeleteConfirmation(false);
};



const handleDeleteBucket = async () => {
  
  if (cartItems.length === 0) {
    toast.info("No Items in your Cart.");
    return;
  }
  

  console.log("userid",userid);
   try {
     const response = await fetch(`${ServiceUrl}/DeleteBucket`,{
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
        userid: userid
       }),
     });
     if (response.ok) {
       toast.success("Your Bucket Delete successfully!");
       setCartItems([]);
      } else {
       toast.error("Error Deleting Bucket:", response.statusText);
     }
   } catch (error) {
     toast.error("Error deleting item:", error.message);
   }  
  };



  // useEffect(() => {
  //   console.log(cartItems, "cart data");
  // }, [cartItems]);

  const placeOrderForItems = async () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty. Select items before placing an order.");
      return;
    }

    // for (const cartItem of cartItems) {
      try {
        const { success, message } = await PlaceOrder(
          userid,
          cartItems
        );
        if (success) {
          console.log( success, `Order placed successfully for ${cartItems.food_name}`);
          toast.success("Your Order Submit Successfully")
          setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => !cartItems.includes(item))
        );  } else {
          console.error(`Failed to place order for ${cartItems.food_name}: ${message}`);
          toast.error("Error to Place Your Order")
        }
      } catch (error) {
        console.error(`Error placing order for ${cartItems.food_name}:`, error);
      }
    
  };






  return (
    <main>
    <Navber/>
    <div className="min-h-screen  contact-warp" style={{ fontFamily: "-moz-initial" }}>
    <ToastContainer/>
      <div className="w-full h-full p-10">
     <div className="flex justify-between" >
              <div>
        <h1 className="text-5xl font-semibold mb-8 text-white">
          Y<span className="text-red-600">O</span>u<span className="text-red-600">R</span> C
          <span className="text-red-600">a</span>Rt <span className="text-red-600"> I</span>t
          <span className="text-red-600">E</span>m<span className="text-red-600">S</span>
        </h1>           
        <div className="border border-white border-b-8 rounded-full w-[300px] mb-10 " />
        </div>

        <div className="flex gap-3 mt-5">
        <button
          onClick={placeOrderForItems}
          className="bg-red-600 text-white  px-8 w-[150px] h-[60px]  rounded-md  transition-transform hover:scale-105  duration-500 hover:bg-red-700"
        >
          Place Order
        </button>       
              <button
                onClick={handleDeleteBucket}
                className="bg-red-600 text-white px-4 w-[150px] h-[60px] rounded-md  transition-transform hover:scale-105  duration-500 hover:bg-red-700"
              >
                Delete Bucket
              </button>
            </div>
            </div>

        {cartItems.length === 0 ? (
          <div classNamew="w-full h-full" > 
          <div className="flex justify-center items-center" >
          <p className="text-gray-300 text-3xl mt-10 ">Your cart is empty.</p>
        </div>
        </div>
        ) : (
          <div className="mb-5">
            {cartItems.map((item) => (
              <CarDsItem 
              onDelete={() => {
                setItemToDelete(item);
                setShowDeleteConfirmation(true);
              }}
              key={item.id} 
              item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
    {showDeleteConfirmation && (
        <div  style={{ fontFamily: "-moz-initial" }} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-4">
              Are you sure you want to delete this item from the cart?
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="bg-gray-300 px-4 py-2 mr-4 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteItem}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
  </main>
);
};

const CarDsItem = ({ item,onDelete  }) => {
// Check if optional items exist

return (
  <div className="flex relative mb-10 justify-between border-b  w-full h-full bg-gray-100 rounded-lg shadow-2xl">
   
    <button onClick={onDelete} className=" bg-gray-100 rounded-full shadow-md p-5
     hover:bg-gray-50 border border-gray-200 absolute top-4 right-4 transition-transform hover:scale-105  duration-500">
  <FaTrashAlt className="text-red-600" />
</button>   
    <div className="flex space-x-6 ">
      <div className="flex rounded-md overflow-hidden">
        <img
          className="w-[400px] h-[400px] object-cover rounded-lg rounded-tr-full rounded-br-full "
          src={`${ServiceUrl}/AddFoodItems/?filename=${item.images[0]["name"]}`}
          alt={item.images[0]["name"]}
        />
      </div>
      <div>
        <div className="p-5">
       <div className="flex gap-2" >
        <FaUtensils className="mr-2 text-red-600 mt-1" />
              
          <h2 className="text-xl font-semibold text-gray-900">{item.food_name}</h2>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-gray-500 text-xl font-bold">
              <FaRupeeSign className="inline-block mr-1 text-red-600" />
              {item.price}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-gray-500 text-xl font-bold ">
              <span className="text-gray-900">Category:</span> {item.categories}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-gray-500 text-xl font-bold">
              <span className="text-gray-900">Calories:</span> {item.calories_burned}
            </span>
          </div>
          <p className="text-gray-500 text-lg mt-4 ">
            <span className="text-gray-900 text-xl font-bold">Description:</span> {item.description}
          </p>

          {/* Check if optional items exist and display them */}
           <div className="mt-2">
              <div className="text-xl text-gray-500 ">
                <span className="text-gray-900 text-xl font-bold">Optional Items</span>{" "}
                  <h1  className="mr-2 flex gap-2 mt-2">
                  <FaUtensils className="mr-2 text-red-600 mt-1" />
                    {item.d_name}
                  </h1>
                  <div className="flex gap-2 mt-2" >
                  <h1  className="mr-2 flex gap-2">
                  <FaMoneyBillAlt className="mr-2 text-red-600 mt-1 " />
                    {item.d_price}
                  </h1>
                  <h1  className="mr-2 flex gap-2 ">
                  <FaMoneyBillAlt className="mr-2 text-red-600 mt-1" />
                    {item.d_total}
                  </h1>
                  </div>
                  <div className="flex gap-2 mt-2" >
                
                  <h1  className="mr-2 flex gap-2 ">
                  <FaCubes className="mr-2 text-red-600 mt-1" />
                    {item.d_quantity}
                  </h1>
                  <h1  className="flex gap-2">
                  <FaCommentAlt className="mr-2 text-red-600  mt-1" />
                    {item.d_messages}
                  </h1>
                </div>  
              </div>
            </div>
        </div>
      </div>
    </div>
    
  </div>
);
};

export default AddToCartPage;

