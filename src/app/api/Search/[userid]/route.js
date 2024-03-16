
import { NextResponse } from "next/server";
import Search from "../../../models/recent_searches"




export async function GET(request , content) {

    const userid = content.params.userid


  const searchdata = await Search.find({userid:userid});
console.log(searchdata)
  return NextResponse.json(
    {  searchdata},
    { status: 200 }
  );
}

