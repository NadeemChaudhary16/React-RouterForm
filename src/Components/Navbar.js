import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn
    let setIsLoggedIn=props.setIsLoggedIn
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto text-slate-400">
      <Link to="">
        <img src={logo} height={32} width={160} loading="lazy" alt="" />
      </Link>

      <nav>
        <ul className="flex gap-6">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>

      {/* Login Signup Logout Signup button */}

      <div className="flex gap-4">
        { !isLoggedIn &&
            <Link to="/login">
                <button className="py-[8px] px-[12px] rounded-[8px] border  bg-slate-900 border-slate-700" >Login</button>
            </Link>
        }

        { !isLoggedIn &&
            <Link to="/signup">
                <button className="py-[8px] px-[12px] rounded-[8px] border bg-slate-900 border-slate-700">Signup</button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/">
                <button className="py-[8px] px-[12px] rounded-[8px] border  bg-slate-900 border-slate-700" onClick={() =>{
                     setIsLoggedIn(false);
                     toast.success('logged out successfully')
                }}>Logout</button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/dashboard">
                <button className="py-[8px] px-[12px] rounded-[8px] border bg-slate-900 border-slate-700">Dashboard</button>
            </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
