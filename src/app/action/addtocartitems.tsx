
"use server"
import AddToCartItems from '../models/cartItems';
import  Order from "../models/placeOrder";






export async function AddToCart(food_name, description, price, calories_burned, categories, d_name, d_price, d_total, d_quantity, d_messages, images, userid) {

console.log("userid:",userid);


    try {

        await AddToCartItems.create(
            {
                food_name: food_name,
                description: description,
                price: price,
                calories_burned: calories_burned,
                categories: categories,
                d_name: d_name,
                d_price: d_price,
                d_total: d_total,
                d_quantity: d_quantity,
                d_messages: d_messages,
                images: images,
                userid: userid
            });

        return ({ sucess: true, message: 'Item added to cart Scuessfully' });

    } catch (error) {
        console.error(error);
        return ({ sucess: false, message: 'Item not added to cart' });

    }
}





export async function PlaceOrder( userid,carlists) {

    console.log("userid:",userid);


    try {
        // const cartItem = {
        //     food_name,
        //     description,
        //     price,
        //     calories_burned,
        //     categories,
        //     d_name,
        //     d_price,
        //     d_total,
        //     d_quantity,
        //     d_messages,
        //     images
        // };

    //     // Find the order document for the user or create a new one
    //     const order = await Order.findOne({ 'userid': userid });
    //     console.log("order:",order);
    //     if (order) {
    //         // Add the cart item to an existing order
    //         order.cart_items.push(cartItem);
    //          await order.save();
            
    //   // Delete items from AddToCartItems collection for the given userid
    //   await AddToCartItems.deleteMany({userid:userid}).lean();
    //     } else {
            // Create a new order with the cart ite
var CartitemsNewList =[]


for(var i in carlists){
    CartitemsNewList.push({
        'food_name':carlists[i]['food_name'],
        'description':carlists[i]['description'],
        'price':carlists[i]['price'],
        'calories_burned':carlists[i]['calories_burned'],
        'categories':carlists[i]['categories'],
        'd_name':carlists[i]['d_name'],
        'd_price':carlists[i]['d_price'],
        'd_total':carlists[i]['d_total'],
        'd_quantity':carlists[i]['d_quantity'],
        'd_messages':carlists[i]['d_messages'],
        'images':carlists[i]['images'],
    })
}



            await Order.create({
                userid:userid,
                status:"pending",
                cart_items: CartitemsNewList
            });
            
      // Delete items from AddToCartItems collection for the given userid
      await AddToCartItems.deleteMany({userid:userid}).lean();
        // }

        return { success: true, message: 'Item added to cart successfully' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Item not added to cart' };
    }
}


export async function GetOrders() {
    try {
           // Find the order document for the user or create a new one
           const getorder = await Order.find().lean();
           console.log("order:",getorder);
           return { success: true, message: 'Fetch Orders successfully!',getorder:getorder };
       } catch (error) {
           console.error(error);
           return { success: false, message: 'Orders not Fetch something went wrong' };
       }
   }
   
   

   export async function updateOrderInDatabase(orderid) {
    try {
           // Find the order document for the user or create a new one
           const updateorder = await Order.findByIdAndUpdate(orderid).lean();
           console.log("updateorder:",updateorder);
           return { success: true, message: 'updateorder Orders successfully!',updateorder:updateorder };
       } catch (error) {
           console.error(error);
           return { success: false, message: 'Orders not updateorder something went wrong' };
       }
   }
   








export async function FetchCartItemsById() {
    // console.log("userid", userid);
    try {
        const cartitems = await AddToCartItems.find();

        if (!cartitems || cartitems.length === 0) {
            return { success: false, message: 'Cart items not found' };
        }

        return { status: 200, message: "Cart data fetch successfully", cartitems: cartitems };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error fetching cart items' };
    }
}





