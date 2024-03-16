import { NextRequest, NextResponse } from "next/server";
import AddToCartItems from "../../models/cartItems";
import Order from "../../models/placeOrder";


export async function GET() {

    try{
        console.log("hit...?")

        const filename:any = await AddToCartItems.find();

    if (!filename) {
      return new Response(null, { status: 400, statusText: 'Bad Request' });
    }  
      // Return the file as the response
      return  NextResponse.json(filename,{status:200});
    } catch (error) {
      console.error(`Error reading file: ${error}`);
      return new Response(null, { status: 404, statusText: 'Not Found' });
    }
  }
  
  export async function DELETE(request) {
    console.log("delete hit..?")
    try {
      const { id } =  await request.json();
     console.log(id);
      // Validate if the ID is valid mongoose ObjectId
   
      // Find and delete the item by ID
      const deletedItem = await AddToCartItems.findByIdAndDelete(id);
  
      if (!deletedItem) {
        return new NextResponse(null, { status: 404, statusText: "Not Found" });
      }
  
      // Return a success response
      return new NextResponse(null, { status: 204, statusText: "No Content" });
    } catch (error) {
      console.error(`Error deleting item: ${error}`);
      return new NextResponse(null, { status: 500, statusText: "Internal Server Error" });
    }
  }



// Assuming you have a route or API endpoint for placing orders, update the POST method as follows:

// export async function POST(request) {
//   console.log("shot")
//   try {
//     // Get cart items from the request body
//     const { cartItems} = await request.json();

//     // Validate if cartItems is an array
//     // if (!Array.isArray(cartItems) || cartItems.length === 0) {
//     //   return new NextResponse(null, { status: 400, statusText: 'Bad Request - Invalid or Empty Cart' });
//     // }

//     // Remove _id and __v properties from each item
//     const modifiedCartItems = cartItems.map(item => {
//       const { _id, __v, ...newItem } = item;
//       return newItem;
//     });

//     // console.log(modifiedCartItems.map((item)=> item.images));
//     // Save cart items to the database
//     await Order.create({ items: modifiedCartItems });

//     // Optionally, you can return details about the placed order
//     return new NextResponse(null, { status: 200, statusText: 'Order Placed Successfully!' });

//   } catch (error) {
//     console.error(`Error placing order: ${error}`);
//     return new NextResponse(null, { status: 500, statusText: 'Internal Server Error' });
//   }
// }
