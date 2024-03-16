import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verificationLink, user, pass } from "../../global";


export async function POST(request) {

  const { userType, resturantname, phonenum, cnic, email, username } = await request.json();

  // Send an email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  let verificationLinkData;
  let encodedData;
  let htmlContent;

  if (userType === "Admin") {
    verificationLinkData = {
      resturantname: resturantname,
      phonenum: phonenum,
      cnic: cnic,
      email: email,
      userType:userType
    };

    encodedData = encodeURIComponent(JSON.stringify(verificationLinkData));


     htmlContent = `
    <!-- Admin Verification Email Content -->
    <p>Dear ${resturantname},</p>
    <p>Thank you for creating an admin account with our service.</p>
    <p>To verify your email address, please click the link below:</p>
    <p><a href="${verificationLink}?data=${encodedData}">Verify Email</a></p>
    <p>${email}</p>
    <p>If you did not create an admin account with us, please ignore this email.</p>
    <p>Thank you for using our service!</p>
  `;
  } else if (userType === "User") {
    verificationLinkData = {
      username: username,
      email: email,
      userType:userType
    };

    encodedData = encodeURIComponent(JSON.stringify(verificationLinkData));

    htmlContent = `
    <!-- User Verification Email Content -->
    <p>Dear ${username},</p>
    <p>Thank you for creating a user account with our service.</p>
    <p>To verify your email address, please click the link below:</p>
    <p><a href="${verificationLink}?data=${encodedData}">Verify Email</a></p>
    <p>${email}</p>
    <p>If you did not create a user account with us, please ignore this email.</p>
    <p>Thank you for using our service!</p>    
    `;
  } else {
    return NextResponse.json({ status: 400, message: "Invalid user type" });
  }

  // Convert the verificationLinkData object to a JSON string
  
  const mailOptions = {
    from: user,
    to: email,
    subject: "Account Verification",
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json({ status: 200, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ status: 500, message: "Error sending email" });
  }
}