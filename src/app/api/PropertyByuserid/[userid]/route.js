
import { NextResponse } from "next/server";
import Product from "../../../models/product"
// import connectDB from "../../../utils/dbconnect";



export async function GET(request , content) {

    const userid = content.params.userid
  
const obj = await Product.find({userid:userid});
  return NextResponse.json(
    {obj},
    { status: 200 }
  );
}

