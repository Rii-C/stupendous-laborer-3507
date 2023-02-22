import React, { useState } from "react";
import style from "./Navbar.css";
import { Link ,useNavigate} from "react-router-dom";
import weblogo from "./webLogo.png"
import {AiOutlineUser} from "react-icons/ai"
import {FaShoppingBag} from "react-icons/fa"
import { TfiTruck } from "react-icons/tfi";
import { TbChartCircles,TbTruck ,TbDiamond} from "react-icons/tb";
import { FiClock,FiSmartphone,FiGift} from "react-icons/fi";
import {IoReorderFourSharp} from "react-icons/io5"

export const Navbar = () => {
  const [isMobail, setisMobail] = useState(false);

  const navigate=useNavigate()
  return (
    <>
      <div className="navbaody">
      
        <div className="navtopbody">
          
          <div className="mainlogo" >
          <div className="opencrson" onClick={()=>setisMobail(!isMobail)}><IoReorderFourSharp/></div> <img src={weblogo} alt="" onClick={()=>navigate("/")}/>
          </div>
          <div className="searchboxdic">
            <input type="text" placeholder="Search your product.."/>
          </div>
          <div className="useracsection847">
           
              <h1 className="acountbuton"><AiOutlineUser className="naviconhgf554"/><Link to="/login">Account</Link></h1>
            
              <h1 className="acountbuton"><FaShoppingBag className="naviconhgf554"/><Link to="/cart">Cart</Link></h1>
              <h1 className="acountbuton2"><Link to="/login"><AiOutlineUser /></Link></h1>
            
            <h1 className="acountbuton2"><Link to="/cart"><FaShoppingBag /></Link></h1>
            
          </div>
        </div>
        
      </div>
        <div className="categorydic">
          
            <Link to="/product">Brands</Link>
          
          
            <Link to="/skincare">Holidayshop</Link>
         
          
            <Link to="/main">Bathandbody</Link>
          
            <Link to="/product">Fragrance</Link>
          
            <Link to="/skincare">Tools And Devices</Link>
          
            <Link to="/product">Gifts</Link>
         
            <Link to="/makeup">Makeup</Link>
          
            <Link to="/makeup">Hairandcare</Link>
          
            <Link to="/main">New</Link>
          
            <Link to="/skincare">Skincare</Link>
          
        </div>
    </>
  );
};