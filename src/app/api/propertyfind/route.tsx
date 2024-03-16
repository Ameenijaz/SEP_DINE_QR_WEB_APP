import connectDB from "../../utils/dbconnect";
import Product from "../../models/product";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   try {
//     await connectDB();

//     const url = new URL(request.url);
//     const queryParameters = url.searchParams;

//     // Extract query parameters for filtering
//     const propertyType = queryParameters.get("propertyType");
//     const subType = queryParameters.get("subType");
  
//     const orConditions = [];

//     if (propertyType) {
//       orConditions.push({ propertyType: { $regex: propertyType, $options: "i" } });
//     }
//     if (subType) {
//       orConditions.push({ subType: { $regex: subType, $options: "i" } });
//     }
   

//     // Create the final filter object using the $or operator
//     const filter = {
//       $or: orConditions,
//     };

//     // Use the filter to find matching products
//     const filteredProducts = await Product.find(filter);

//     return NextResponse.json({ filteredProducts }, { status: 200 });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.error("Internal Server Error", { status: 500 });
//   }
// }



export async function GET(request: NextRequest) {
  try {
  

    const url = new URL(request.url);
    const queryParameters = url.searchParams;

    // Extract query parameters for filtering
    const propertyType = queryParameters.get("propertyType");
    const subType = queryParameters.get("subType");

    const conditions = {}; // Initialize filter conditions object

    if (propertyType) {
      conditions.propertyType = {
        $regex: new RegExp(propertyType, "i"), // Perform a case-insensitive search
      };
    }

    if (subType) {
      conditions.subType = {
        $regex: new RegExp(subType, "i"), // Perform a case-insensitive search
      };
    }

    // Use the conditions object to find matching products
    const filteredProducts = await Product.find(conditions);

    return NextResponse.json({ filteredProducts }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
