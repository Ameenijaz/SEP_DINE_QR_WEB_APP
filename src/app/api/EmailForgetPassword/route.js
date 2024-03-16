import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { user, pass } from "../../global";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate the email address format
    if (!isValidEmail(email)) {
      throw new Error("Invalid email address format");
    }

    // Generate a random 5-digit verification code
    const verificationCode = generateRandomCode();

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

    // HTML email content with the verification code
    const htmlContent = `
    <html>
    <head>
      <style>
        /* Add CSS styles for better appearance */
        body {
          text-align: center;
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          padding: 20px;
        }
  
        .container {
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
  
        h1 {
          color: #ff6347; /* Reddish color */
        }
  
        p {
          font-size: 16px;
          margin: 10px 0;
        }
  
        .website-name {
          font-size: 24px;
          color: #333; /* Dark gray */
          margin-top: 20px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Verification Code</h1>
        <p>Your Verification Code: ${verificationCode}</p>
        <p>If you did not request this code, please ignore this email.</p>
        <div class="website-name">Dine Qr</div>
      </div>
    </body>
    </html>
  `;
  
    const mailOptions = {
      from: user,
      to: email,
      subject: "Verification Code",
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    if (info.messageId) {
      console.log("Email sent successfully");
      return NextResponse.json({ status: 200 , code:verificationCode });
    } else {
      console.error("Email sending failed");
      return NextResponse.json({ status: 400 });
    }
  } catch (error) {
    console.error("Error sending email:", error.message);
    return NextResponse.json({ status: 400, error: error.message });
  }
}

// Function to validate email format
function isValidEmail(email) {
  // Use a regular expression for basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to generate a random 5-digit code
function generateRandomCode() {
  return Math.floor(10000 + Math.random() * 90000);
}
