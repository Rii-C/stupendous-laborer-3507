import React, { useState } from "react";
import style from "./Navbar.css";
import { Link ,useNavigate} from "react-router-dom";
import weblogo from "./webLogo.png"
import {AiOutlineUser} from "react-icons/ai"
import {CiShoppingCart} from "react-icons/ci"
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
            <input type="text" placeholder="Search for products  brands..."/>
          </div>
          <div className="useracsection847">
          
              <h1 className="acountbuton"><AiOutlineUser className="naviconhgf554"/><Link to="/login">login</Link></h1>
            
              <h1 className="acountbuton20"><CiShoppingCart className="naviconhgf5545"/><Link to="/cart"></Link></h1>
              {/* <h1 className="acountbuton2"><Link to="/login"><AiOutlineUser /></Link></h1> */}
            
            {/* <h1 className="acountbuton2"><Link to="/cart"><FaShoppingBag /></Link></h1> */}
            
            
          </div>
        </div>
        
      </div>
      <div className="navbar">
            
            <div className="dropdown">
                <button className="dropbtn">Brands</button>
                <div className="dropdown-content">
                  <h2>Shop By Brands</h2>
    
                    <div className="row">
                        <div className="column">
                            <b>Sports Nutrition</b>
                            <a href="#">Muscleblaze</a>
                            <a href="#">MB Fuel One</a>
                            <a href="#">bGREEN</a>
                            <a href="#">Optimum Nutrition</a>
                            <a href="#">Ultimate Nutrition</a>
                            <a href="#">MuscleTech</a>
                            <a href="#">MyProtein</a>
                            <a href="#">Isopure</a>
                            <a href="#">Dymatize</a>
                            <a href="#">GNC</a>
                            <a href="#">Labrada</a>
                            <a href="#">MusclePharm</a>
                        </div>
                        <div className="column">
                            <b>Vitamins & Supplements</b>
                            <a href="#">HealthKart HK Vitals </a>
                            <a href="#">GNC</a>
                            <a href="#">TrueBasics</a>
                            <a href="#">Wow life Science</a>
                            <a href="#">NOW</a>
                            <a href="#">Healthvit</a>
                            <a href="#">INLIFE</a>
                            <a href="#">Natures Velvet</a>
                            <a href="#">Swisse</a>
                            <a href="#">NaturaFirst</a>
                            <a href="#">Boldfit</a>
                            <a href="#">Plix Olena</a>
                        </div>
                        <div className="column">
                            <b>Health Food and Drinks</b>
                            <a href="#">Myfitness</a>
                            <a href="#">healthkart HK Vitals</a>
                            <a href="#">Bagrrys</a>
                            <a href="#">True Elements</a>
                            <a href="#">Yoga Bar</a>
                            <a href="#">Gritzo</a>
                            <a href="#">Alpino</a>
                            <a href="#">RiteBite</a>
                            <a href="#">Amway</a>
                            <a href="#">The Whole Truth</a>
                        </div>
                        <div className="column">
                            <b>Fitness</b>
                            <a href="#">Strauss </a>
                            <a href="#">Boldfit</a>
                            <a href="#">Zebronics</a>
                            <a href="#">Noise</a>
                            <a href="#">beatXP</a>
                            <a href="#">John Ally</a>
                            <a href="#">Gionee</a>
                            <a href="#">MuscleXP</a>
                            <a href="#">B Fit USA</a>
                            <a href="#">Omtex</a>
                        </div>
                        <div className="column">
                            <b>Wellness</b>
                            <a href="#">Ustraa</a>
                            <a href="#">NutraFirst</a>
                            <a href="#">Bold Care</a>
                            <a href="#">Amway</a>
                            <a href="#">Himalayan Organic</a>
                            <a href="#">Kozicare</a>
                            <a href="#">Organic Harvest</a>
                            <a href="#">Man Arden</a>
                            <a href="#">INLIFE</a>
                            <a href="#">Hi9</a>
                        </div>
                    </div>
                </div>
            </div>   
    </div>      
     
     
    </>
  );
};

      