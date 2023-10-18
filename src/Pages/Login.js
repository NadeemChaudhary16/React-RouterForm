import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {FcGoogle} from "react-icons/fc"
import loginImg from "../assets/login.png"
import frame from "../assets/frame.png"

const Login = (props) => {
  let navigate=useNavigate()
  let setIsLoggedIn=props.setIsLoggedIn
  const[showPassword,setShowPassword]=useState(false)
  const[loginFormData,setLoginFormData]=useState({
    email:"",
    password:""
  })
 function changeHandler(event){
  setLoginFormData((prev) =>{
    return{
      ...prev,[event.target.name] : event.target.value

    }
  })
 }
 function submitHandler(e) {
  e.preventDefault();
  setIsLoggedIn(true);
  toast.success("Login Success");
  navigate("/dashboard");
}

  return (
    <div className="flex justify-evenly mt-10">
      <div className="text-white w-[30%] flex flex-col">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">Welcome Back</h1>
        <p className="text-slate-300 my-5 text-[1.150rem] ">Build skills for today, tomorrow, and beyond. <span className="text-blue-400 italic">Education to future-proof your career.</span></p>
        <form action="" onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col">
        <label htmlFor="email" className="">Email Address<sup className="text-red-600">*</sup> </label>
          <input type="email" id="email" placeholder="Enter your email address"
          name="email"
          value={loginFormData.email}
          required 
          onChange={changeHandler}
          className="text-white rounded-[0.75rem] w-full p-[12px] bg-slate-900"/>
        </div>
        <div className="relative flex flex-col">
        <label htmlFor="password" className="relative">Password<sup className="text-red-600 ">*</sup> </label>
          <input type={showPassword ? "text" :"password"}  placeholder="Enter Password"
          required
          name="password"
          value={loginFormData.password}
          onChange={changeHandler}
          className="text-white rounded-[0.75rem] w-full p-[12px] bg-slate-900" />
          <span className="absolute right-3 top-10 text-slate-500" onClick={() => setShowPassword(!showPassword)}>
            {
              showPassword ?  <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />
            }
          </span>
          <Link to="#" className="text-sm text-blue-400">Forgot Password</Link>
        </div>

        <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black ">Sign in</button>
          
        </form>
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-slate-700"></div>
          <p className="text-slate-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-slate-700"></div>
        </div>

        <button className=" py-[8px] px-[12px] rounded-[8px] mt-6 font-medium flex justify-center items-center gap-2 border border-slate-700">
        <FcGoogle />Sign Up with Google</button>
      </div>

      <div className="relative">
      <img
          src={frame}
          alt="pattern"
          width={500}
          height={450}
          loading="lazy"

        />
        <img
          src={loginImg}
          alt="pattern"
          width={500}
          height={450}
          loading="lazy"
          className="absolute top -top-4 right-4"
        />
      </div>
    </div>
  )
}

export default Login
