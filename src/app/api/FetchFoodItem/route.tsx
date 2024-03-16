import FoodItems from "../../models/fooditem";
import { NextResponse } from "next/server";



export async function GET(request) {

  const {userid} = request.json()

const Productdata = await FoodItems.find(userid).lean();

  return NextResponse.json(
    {  Productdata},
    { status: 200 }
  );
}






  // Send an email
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     service: 'gmail',
//     auth: {
//       user: user,
//       pass: pass,
//     },
//   });



// export async function POST(request: NextRequest) {

// const data = await request.formData();
// const purpose = data.get("purpose");
//   const propertyType = data.get("propertyType");
//   const subType = data.get("subType");
//  const city = data.get("city");
//   const location = data.get("location");
//   const Area_size = data.get("Area_size");
//   const price = data.get("price");
//   const bedrooms = data.get("bedrooms");
//   const bathrooms = data.get("bathrooms");
//   const title = data.get("title");
//   const description = data.get("description");
//   const email = data.get("email");
//   const mobile = data.get("mobile");
// const image_files: File[] = data.getAll("imagefiles") as unknown as File[];
//   const video_files: File[] = data.getAll("videofiles") as unknown as File[];

//   if (!image_files && !video_files) {
//     return NextResponse.json({ status:400 });
//   }

// //  for images List 

// const images =[]

// for (var image of image_files) {
//   const bytes = await image.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   // Add the filename to the images array
//   images.push({ name: image.name });

//   // Save the file to the server
//   const path = `./public/tmp/${image.name}`;
//   await writeFile(path, buffer);

//   console.log(`Uploaded images ${image.name}`);
// }


// // //  for videos List 

// const videos =[]

// for (var video of video_files) {
//   const bytes1 = await video.arrayBuffer();
//   const buffer1 = Buffer.from(bytes1);

//   // Add the filename to the images array
//   videos.push({ name: video.name });

//   // Save the file to the server
//   const path = `./public/tmp/${video.name}`;
//   await writeFile(path, buffer1);

//   console.log(`Uploaded Videos ${video.name}`);
// }






//   const property =   new Product({
//     purpose,
//     propertyType,
//     subType,
//     city,
//     location,
//     Area_size,
//     price,
//     bedrooms,
//     bathrooms,
//     title,
//     description,
//     email,
//     mobile,
//   images:images,
//   videos:videos
//     });

//    await property.save()

//  // Send an email notification to subscribers
//  const subscribers = await subscribe.find({}, 'email'); // Get all subscriber emails

//  if (subscribers.length > 0) {
//    const emailList = subscribers.map((subscriber) => subscriber.email);

//    const mailOptions = {
//      from: user, // Sender's email address
//      to: emailList.join(', '), // List of subscriber email addresses
//      subject: 'New Property Listing: Explore the Latest Property!', // Email subject
//   html: `
//     <html>
//       <head></head>
//       <body>
//         <h1>New Property Listing</h1>
//         <p>Explore the latest property that just became available!</p>
//         <p>Click the link below to view the property details:</p>
//         <a href="${DomainUrl}">View Property</a>
//       </body>
//     </html>
//   `, 
//    };

//    transporter.sendMail(mailOptions, (error, info) => {
//      if (error) {
//        console.error('Email sending failed:', error);
//      } else {
//        console.log('Email sent:', info.response);
//      }
//    });
//  }









//   return NextResponse.json( { status:200 });
// }





//  Fetch image or video



// export async function GET(request) {
//   const url = new URL(request.url);
//   const filename = url.searchParams.get('filename');

//   if (!filename) {
//     return new Response(null, { status: 400, statusText: 'Bad Request' });
//   }

//   // Assuming the uploaded files are stored in the "/public/tmp" directory
//   const path = `./public/tmp/${filename}`;

//   try {
//     // Read the file from the filesystem
//     const fileData = await readFile(path);
    
//     // Get the file extension
//     const extension = filename.split('.').pop().toLowerCase();

//     // Set the appropriate content type based on the file extension
//     let contentType = 'application/octet-stream'; // Default content type for unknown file types

//     if (extension === 'png') {
//       contentType = 'image/png';
//     } else if (extension === 'jpg' || extension === 'jpeg') {
//       contentType = 'image/jpeg';
//     } else if (extension === 'mp4') {
//       contentType = 'video/mp4';
//     }
//     // Add more conditions for other supported file types as needed

//     // Set the appropriate headers for the image or video response
//     const headers = {
//       'Content-Type': contentType,
//       'Content-Length': fileData.length.toString(),
//     };

//     // Return the file as the response
//     return new Response(fileData, { headers });
//   } catch (error) {
//     console.error(`Error reading file: ${error}`);
//     return new Response(null, { status: 404, statusText: 'Not Found' });
//   }
// }

// // Delete API also delete from Folder




// export async function DELETE(request) {
  
//   const { filename } = await request.json();


//   if (!filename) {
//     return NextResponse.json({ success: false, message: "No filename provided" });
//   }

//   // Define the path to the file to be deleted
//   const filePath = `./public/tmp/${filename}`;

//   try {
//     // Connect to MongoDB
//     await connectDB();

//     // Find the document associated with the file in MongoDB
//     const fileDocument = await Product.findOne({ "images.name": filename });

//     if (!fileDocument) {
//       return NextResponse.json({ success: false, message: "File not found in database" });
//     }

//     // Delete the document from MongoDB
//     await Product.deleteOne({ _id: fileDocument._id });

//     // Attempt to delete the physical file
//     await unlink(filePath);

//     // File and document deleted successfully
//     return NextResponse.json({ success: true, message: "File and document deleted successfully" });
//   } catch (error) {
//     console.error(`Error deleting file and document for ${filename}:`, error);
//     return NextResponse.json({ success: false, message: "File and document deletion failed" });
//   }
// }






