"use server"

import nodemailer from "nodemailer";
import {  user, pass  } from "../global";



export async function ContactUser(userid  , firstName , lastName ,phone ,email , message ) {
  try {
   

    // Validate the email address format
    if (!isValidEmail(email)) {
      throw new Error("Invalid email address format");
    }

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

  
  // HTML email content with the verification link
  const htmlContent = `
  <p>New contact inquiry received:</p>
  <p>Name: UserId : ${userid} </p>
  <p>Name: ${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Message: ${message}</p>
  <p>Please respond to the inquiry promptly.</p>
  `;



    const mailOptions = {
      from: user,
      to: email,
       subject: 'User Feedback',
      html: htmlContent,
    };

 
    const info = await transporter.sendMail(mailOptions);

    if (info.messageId) {


   
      console.log("Email sent successfully");

   
    
    
    } else {
      console.error("Email sending failed");
 
    }
  } catch (error) {
    console.error("Error sending email:", error.message);
    return ({ status: 400, error: error.message });
  }
}

// Function to validate email format
function isValidEmail(email) {
  // Use a regular expression for basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

