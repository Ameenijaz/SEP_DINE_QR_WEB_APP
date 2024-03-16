import { NextRequest, NextResponse } from "next/server";
import AddToCartItems from '../../models/cartItems';


export async function DELETE(request) {
    console.log("delete Bucket hit..?")
    try {
      const { userid } =  await request.json();
     console.log(userid);
      // Validate if the ID is valid mongoose ObjectId
   
      // Find and delete the item by ID
      const deletedBucket = await AddToCartItems.deleteMany({userid:userid}).lean();
  
      console.log(deletedBucket);

      if (!deletedBucket) {
        return new NextResponse(null, { status: 404, statusText: "Not Found" });
      }
  
      // Return a success response
      return new NextResponse(null, { status: 204, statusText: "No Content" });
    } catch (error) {
      console.error(`Error deleting Bucket: ${error}`);
      return new NextResponse(null, { status: 500, statusText: "Internal Server Error" });
    }
  }




  