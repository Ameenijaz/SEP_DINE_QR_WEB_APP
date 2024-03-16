import subscribe from "../../models/subscribe";
import User from "../../models/user";
import { NextResponse } from "next/server";






export async function POST(request) {
  const { email } = await request.json();

  // Check if the email already exists in the database
  const existingUser = await subscribe.findOne({ email });

  if (existingUser) {
    // If the email already exists, you can handle it as needed
    // For example, you can return an error response or a success response
    return NextResponse.json({ status: 409, message: "Email already exists" });
  } else {
    // If the email doesn't exist, save it to the database
    const user = await subscribe.create({ email });
    console.log(user);

    return NextResponse.json({ status: 200, obj:user, message: "Email subscribed successfully" });
  }
}
