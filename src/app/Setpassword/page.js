'use client'
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useState } from 'react';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ServiceUrl } from "../../app/global";
import { useRouter } from "next/navigation";
// ... (import statements)

const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const router = useSearchParams();
  const data = JSON.parse(decodeURIComponent(router.get("data")));
  const email = data['email'];
  const resturantname = data['resturantname'];
  const cnic = data['cnic'];
  const phonenum = data['phonenum'];
  const userType = data['userType'];
  const username = data['username'];
  const route = useRouter();

  const isStrongPassword = (password) => {
    // Define your strong password criteria here
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async () => {
    if (!isStrongPassword(password)) {
      toast.error('Password does not meet strong requirements');
      console.log('error password');
      return;
    }

    if (password !== confirmpassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const isEmailField = userType === "User"; // Check if the user type is "User"
      const formData = isEmailField
        ? { username: username, email: email, userType: userType, password: password }
        : { resturantname: resturantname, phonenum: phonenum, cnic: cnic, email: email, userType: userType, password: password };

      const response = await fetch(`${ServiceUrl}/SignUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      console.log("responseData:", responseData);

      toast.success('Account Created successfully');
      route.push('/Login');
    } catch (error) {
      toast.error('Error signing up:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-4 font-sans text-center text-red-600">Set Your Password</h2>
        <form>
          <div className="relative flex flex-col gap-9">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              autoFocus
              className="relative z-10 border-0 border-b-2 text-xs border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
            />
            <label className="absolute text-xs font-sans transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
              Enter Password
            </label>
          </div>
          <div className="mt-5">
            <div className="relative flex flex-col">
              <input
                id="confirmpassword"
                type="password"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                placeholder=" "
                autoFocus
                className="relative z-10 border-0 border-b-2 border-blue-500 text-xs h-10 bg-transparent text-gray-900 outline-none px-2 peer"
              />
              <label className="absolute font-sans text-xs transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
                Confirm Password
              </label>
            </div>
          </div>
          <button
            onClick={handleSignUp}
            type="button"
            className="mt-10 w-full text-white bg-gradient-to-r from-red-400 via-red-500
           to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800
            font-medium rounded-lg text-sm  py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
        </form>
        <div className="flex gap-2 mt-4 justify-center">
          <p className="text-center  text-xs text-gray-600">
            Already have an account?
          </p>
          <Link className="text-indigo-600 text-xs hover:text-indigo-800" href={"/Login"}>
            Sign In
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SetPassword;

// const SetPassword =() =>{

//   const [password, setPassword] = useState('');

//   const [confirmpassword, setConfirmpassword] = useState('');
//   const router = useSearchParams();
//   const data  = JSON.parse(decodeURIComponent(router.get("data")));
//   const email = data['email']
//   const resturantname =  data['resturantname']
//   const cnic  = data['cnic'];
//   const phonenum = data['phonenum']
//   const userType = data['userType']
//   const username = data['username']
 
// const route = useRouter()

//   const isStrongPassword = (password) => {
//     // Define your strong password criteria here
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleSignUp = async () => {
//   if (!isStrongPassword(password)) {
//       toast.error('Password does not meet strong requirements');
//       console.log('error password')
//       return;
//     }
    
//     else if (password ==  confirmpassword ){

//       console.log('error ')
//     try {
//       const isEmailField = userType === "User"; // Check if the user type is "User"
//       const formData = isEmailField
//         ? { username: username, email: email ,userType:userType }
//         : { resturantname: resturantname, phonenum: phonenum, cnic: cnic, email: email ,userType:userType };


//       const response = await fetch(`${ServiceUrl}/SignUp`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
    
//       console.log("data:",data)

// toast.success('Account Created  successfully')
   
// route.push('/Login')
//     } catch (error) {
//       toast.error('Error signing up:', error);
//     }
//   }
//   };

 
//   return( 
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
     
     
//       <div className="bg-white p-10 rounded-lg shadow-lg w-96">
      
//       <h2 className="text-3xl font-semibold mb-4 font-sans text-center text-red-600">Set Your Password</h2>
       
//         <form>
    
//         <div className="relative flex flex-col gap-9 ">
      
//       <input
//           id="email"
//           type="text"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder=" "
//          autoFocus
//         className="relative z-10 border-0 border-b-2 text-xs border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
//       />
//       <label className="absolute text-xs font-sans transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
//         Enter Password
//       </label>
//     </div>
    
//           <div className=" mt-5">
//           <div className="relative flex flex-col">
      
//       <input
//         id="password"
//         // type={showPassword ? 'text' : 'password'}
//         type="text"
//         value={confirmpassword}
//         onChange={(e) => setConfirmpassword(e.target.value)}
//        placeholder=" "
//         autoFocus
//         className="relative z-10 border-0 border-b-2 border-blue-500 text-xs h-10 bg-transparent text-gray-900 outline-none px-2 peer"
//       />
//       <label className="absolute font-sans text-xs transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
//         Confirm Password
//       </label>
//     </div>  
//           </div>
    
//           <button onClick={handleSignUp} type="button" className="mt-10 w-full text-white bg-gradient-to-r from-red-400 via-red-500
//            to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800
//             font-medium rounded-lg text-sm  py-2.5 text-center mr-2 mb-2">Submit</button>
    
//         </form>
        
//         <div className="flex gap-2 mt-4 justify-center">
//         <p className="text-center  text-xs text-gray-600">
//         Already have an account?
         
//         </p>
//         <Link className="text-indigo-600 text-xs hover:text-indigo-800" href={"/Login"}>
//         Sign In
         
//           </Link>
//           </div>
    
//       </div>
//       <ToastContainer  />
//     </div>
    
    
//     )

// }

// export default SetPassword;