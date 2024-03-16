import User from "../../models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
let saltRounds = 10;

export async function POST(request) {
  console.log("hit..?");

  try {
    let { userType, resturantname, phonenum, cnic, email, username, password } = await request.json();
    let hash;
    console.log("hit..?",userType, resturantname, phonenum, cnic, email, username, password);


    if (!password || password.trim().length === 0) {
      return NextResponse.json({ status: 400, message: "Password cannot be empty" });
    }

    if (userType === "User") {
      hash = await bcrypt.hash(password, saltRounds);
      await User.create({ username, email, password: hash, userType: userType });
    } else if (userType === "Admin") {
      // Additional checks or validations for admin fields can be added here
      cnic = cnic.replace(/[^0-9]/g, '');

      hash = await bcrypt.hash(password, saltRounds);
      await User.create({ resturantname, phonenum, cnic, email, password: hash, userType: userType });
    } else {
      return NextResponse.json({ status: 400, message: "Invalid user type" });
    }

    return NextResponse.json({ status: 200, message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ status: 500, message: "Error creating user" });
  }
}


// export async function POST(request) {
//   var { resturantname, phonenum,cnic,email, password } = await request.json();
//    cnic = cnic.replace(/[^0-9]/g, '')
//   const hash = await bcrypt.hash( password, saltRounds );
//   const user = await User.create({ resturantname, phonenum,cnic,email, password :hash   });

//   console.log(user)
//   return NextResponse.json(
//     {
//       msg: "User created Successfully",
//       obj: user 
//     },
//     { status: 200 }
//   );
// }


export async function GET(request) {
const Users = await User.find();
console.log(Users)
  return NextResponse.json(
    {  Users},
    { status: 200 }
  );
}






