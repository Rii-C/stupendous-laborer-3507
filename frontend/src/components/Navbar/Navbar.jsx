import React, { Fragment, useState } from "react";
import  "./Navbar.css";
import styles from "./Dropdown.module.css";
import { Link ,useNavigate} from "react-router-dom";
import weblogo from "../asset/webLogo.png"
import {AiOutlineUser} from "react-icons/ai"
import { FiSearch } from 'react-icons/fi'
import {CiShoppingCart} from "react-icons/ci"
import {IoReorderFourSharp} from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { isNotAuth} from "../../redux/Authentication/action";

export const Navbar = () => {
  const dispatch = useDispatch()

  const {token} = useSelector((store)=>{
    return {token:store.authReducer.token}
  })

  const handleLog = () =>{
 
      localStorage.setItem("token", JSON.stringify(null))
      dispatch(isNotAuth(null))
  }

  const navigate=useNavigate()
  return (
    <>
      <div className="navbaody">
      
        <div className="navtopbody">
          
          <div className="mainlogo" >
          <div className="opencrson" ><IoReorderFourSharp/></div> <img src={weblogo} alt="" onClick={()=>navigate("/")}/>
          </div>
          <div className="searchboxdic">
            <span className={styles.search_div}>
              <button className={styles.searchbtn} ><FiSearch /></button>
              <input type="text" placeholder='Search for products  brands...'
                className={styles.search} />
            </span>
          </div>
          
          <div className="useracsection847">
          {
            token?
            <h1 className="acountbuton" onClick={handleLog}><AiOutlineUser className="naviconhgf554"/>Log out</h1>
            :
              <h1 className="acountbuton"><AiOutlineUser className="naviconhgf554"/><Link to="/login">Login</Link></h1>
            
          }
            
              <h1 className="acountbuton20"><Link to="/cart"><CiShoppingCart className="naviconhgf5545"/></Link></h1>
            
            
          </div>
        </div>
        
      </div>     
     
     
    </>
  );
};

      