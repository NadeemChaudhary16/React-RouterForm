
import './App.css';
import Navbar from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useState } from "react";


function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className="w-[100vw] min-h-[100vh] bg-slate-950 flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
     
    </Routes>
    </div>
  );
}

export default App;