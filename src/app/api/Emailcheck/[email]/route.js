import User from "../../../models/user"
import { NextResponse } from "next/server";




export async function GET(request , content) {

  const email = content.params.email

  var checkemail = await User.find({"email":email});

  console.log(checkemail)

  if(checkemail.length > 0){
    return NextResponse.json({ status: 200 });
  }else if(checkemail.length == 0){
    return NextResponse.json({ status: 400 });
  }else{
    return NextResponse.json({ status: 500 });
  }
  
  }


  