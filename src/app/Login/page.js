'use client'

import Link from "next/link"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ServiceUrl} from "../../app/global"
import { BiLock, BiMailSend } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { DotSpinner, Ring } from '@uiball/loaders'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router  = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handlevisibility(){
    setShowPassword(!showPassword);
  }
  



  const handleLogin = async () => {
    console.log("login hit..!")
    if (email !== '' && password !== '') {
      try {
        setIsLoading(true); // Set isLoading to true when login button is clicked

        const response = await fetch(`${ServiceUrl}/Login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const data = await response.json();
      // Check the response from the API
        if (data['status'] === 200) {
          router.push('/Home');
          setIsLoading(false);
          toast.success('Login Successfully'); 
          localStorage.setItem('current_user', JSON.stringify(data['user']))
          localStorage.setItem('_id', data['user']['_id'])
          localStorage.setItem('role', data['user']['userType'])
        
        } else if (data.status === 400) {
          toast.error('Incorrect Password');
          setIsLoading(false);
        } else if (data.status === 500) {
          toast.error('User Not Found');
          setIsLoading(false);
        }
      } catch (error) {
        toast.error('Error logging in:', error);
        setIsLoading(false);
      }
    } else {
      toast.error('Enter All the required fields');
      setIsLoading(false);
    }
  };


  
    return(
<div className="flex justify-center min-h-screen bg-gray-100 ">
 <ToastContainer />
 
  <div className="bg-white p-10 rounded-lg shadow-lg w-[500px] h-auto ">
  <div className=" flex justify-center items-center  " >
  <img src="/logo.png" className="w-[150px] h-[150px] " />
  </div>
    <h2 className="text-3xl font-semibold mb-4 font-sans text-center text-gray-500 mt-5">Sign In</h2>
    <form>
  
    <div className="relative flex flex-col mt-10">
  <span className="absolute right-2 top-2">
  <BiMailSend className="w-4 h-4 text-blue-500" />
  </span>
  <input
    id="email"
    type="email"
    placeholder=" "
    autoFocus
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="relative z-10  border-0 border-b-2 text-sm border-blue-500 h-10 bg-transparent text-gray-900 outline-none px-2 peer"
  />
  <label className="absolute text-sm font-sans transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
    Enter Email*
  </label>
</div>

<div className="mt-10 relative flex flex-col">
  
<div
          className="absolute right-2 top-2 "
        >
          <BiLock className="w-4 h-4 text-blue-500" />
        </div>

  <input
    id="password"
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder=" "
    autoFocus
    className="relative z-10  border-0 border-b-2 border-blue-500 text-sm h-10 bg-transparent text-gray-900 outline-none px-2 peer"
  />
  <label className="absolute font-sans text-sm transition-transform duration-300 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:translate-y-[-1rem] peer-focus:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500">
    Enter Password*
  </label>
</div>


<div className="flex justify-between mt-1" >

  <span className="flex text-sm font-sans gap-2">
    
    {showPassword? (
    <BsEye onClick={handlevisibility} className="w-4 h-4 mt-1 text-red-500" />
    ):(
      <BsEyeSlash onClick={handlevisibility} className="w-4 h-4 mt-1 text-red-500" />    
    )}
    
    <text  >Show Password</text>
  </span>

      <Link className="text-red-600 text-sm font-sans hover:text-red-800 hover:underline" href={'/Forgetpassword'}>
          Forgot Password?
        </Link>
        </div> 
      
      <div>


      <button disabled={isLoading} onClick={handleLogin} type="button" className="mt-20 w-full text-white 
      bg-gradient-to-r from-red-500 via-blue-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80
        font-medium rounded-lg text-sm  py-3.5 text-center mr-2 mb-2">
           {isLoading ? (
                <div className="flex gap-1 justify-center items-center text-blue-600 text-xs " >
                  <Ring
                    size={15}
                    lineWeight={5}
                    speed={2}
                    className="mt-1"
                    color="white"
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center" >
            Sign In
                </div>
              )} 
          </button>

      </div>
    </form>
    <div className="flex gap-2 mt-4 justify-center">
    <p className="text-center  text-sm text-gray-600">
      Don't have an account?
    </p>
    <Link className="text-red-600 text-sm hover:text-red-800 hover:underline" href={"\Signup"}>
        Sign Up 
      </Link>
      </div>
  </div>
</div>

    )
}


export default Login 



