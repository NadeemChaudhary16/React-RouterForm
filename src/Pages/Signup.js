import React from 'react'
import signUpImg from "../assets/signup.png"
import frame from "../assets/frame.png"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react"
import toast from "react-hot-toast"
const Signup = (props) => {
  const navigate=useNavigate()
  const setIsLoggedIn=props.setIsLoggedIn 
  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const[signUpFormData,setSignUpFormData]=useState({
    fname:"",
    lname:"",
    email:"",
    createPassword:"",
    confirmPassword:""
  })
  function changeHandler(event){
    setSignUpFormData((prev) =>{
      return{
        ...prev,[event.target.name] : event.target.value
  
      }
    })
   }

   function submitHandler(e) {
    e.preventDefault();
    if (signUpFormData.createPassword !== signUpFormData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created Succesffully");
    navigate("/dashboard");
  }
  return (
    <div className="flex justify-evenly my-10">
      <div className="text-white w-[30%] flex flex-col">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">Join the millions learning to code with StudyNotion for free</h1>
        <p className="text-slate-300 my-5 text-[1.150rem] ">Build skills for today, tomorrow, and beyond. <span className="text-blue-400 italic">Education to future-proof your career.</span></p>

        <div className="flex bg-slate-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-slate-950 text-slate-200"
              : "bg-transparent text-slate-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-slate-950 text-slate-200"
              : "bg-transparent text-slate-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
        </div>
        <form action="" onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex gap-4 ">
       <div>
       <label htmlFor="" className="">First name<sup className="text-red-600">*</sup> </label>
          <input type="text" id="fname" placeholder="Enter your first name"
          name="fname"
          value={signUpFormData.fname}
          required 
          onChange={changeHandler}
          className="text-white rounded-[0.75rem] w-full p-[12px] bg-slate-900"/>
       </div>

        <div>
        <label htmlFor="" className="">Last name<sup className="text-red-600">*</sup> </label>
          <input type="text" id="fname" placeholder="Enter your last name"
          name="lname"
          value={signUpFormData.lname}
          required 
          onChange={changeHandler}
          className="text-white rounded-[0.75rem] w-full p-[12px] bg-slate-900"/>
        </div>
        </div>

        <div className="flex flex-col">
        <label htmlFor="email" className="">Email Address<sup className="text-red-600">*</sup> </label>
          <input type="email" id="email" placeholder="Enter your email address"
          name="email"
          value={signUpFormData.email}
          required 
          onChange={changeHandler}
          className="text-white rounded-[0.75rem] w-full p-[12px] bg-slate-900"/>
        </div>
        <div className="relative flex gap-4">
        <div>
        <label htmlFor="password" className="relative">Create Password<sup className="text-red-600 ">*</sup> </label>
        <input type={showCreatePass ? "text" :"password"}  placeholder="Enter Password"
          required
          name="createPassword"
          value={signUpFormData.createPassword}
          onChange={changeHandler}
          className="text-white rounded-[0.75rem] w-full p-[12px] bg-slate-900" />
          <span className="absolute left-[40%] top-9 text-slate-500" onClick={() => setShowCreatePass(!showCreatePass)}>
            {
              showCreatePass ?  <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />
            }
          </span>
        </div>
        <div>
        <label htmlFor="password" className="relative">Confirm Password<sup className="text-red-600 ">*</sup> </label>
          <input type={showConfirmPass ? "text" :"password"}  placeholder="Enter Password"
          required
          name="confirmPassword"
          value={signUpFormData.confirmPassword}
          onChange={changeHandler}
          className="text-white rounded-[0.75rem] w-full p-[12px] bg-slate-900" />
          <span className="absolute right-3 top-9 text-slate-500" onClick={() => setShowConfirmPass(!showConfirmPass)}>
            {
              showConfirmPass ?  <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />
            }
          </span>
        </div>
          
        </div>

        <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black ">Create Account</button>
          
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
          src={signUpImg}
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

export default Signup
