import React, { Fragment, useEffect } from "react";
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
import { getCardData } from "../../redux/Cart/action";
import { SearchBar } from "../SearchBar";

export const Navbar = () => {
  const dispatch = useDispatch()
  const cartCount=useSelector(store=>store.cartReducer.cartCount)
  const {token} = useSelector((store)=>{
    return {token:store.authReducer.token}
  })
  
  useEffect(()=>{
    dispatch(getCardData(token))
      },[])
     


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
          <div className="opencrson" ><IoReorderFourSharp/></div> <img src={weblogo} alt="" style={{cursor:"pointer"}} onClick={()=>navigate("/")}/>
          </div>
          <div className="searchboxdic">
            <span className={styles.search_div}>
              <button className={styles.searchbtn} ><FiSearch /></button>
              {/* <input type="text" placeholder='Search for products  brands...'
                className={styles.search} /> */}
                <SearchBar/>
            </span>
          </div>
          
          <div className="useracsection847">
          {
            token?
            <h1 className="acountbuton" onClick={handleLog}><AiOutlineUser className="naviconhgf554"/>Log out</h1>
            :
              <h1 className="acountbuton"><AiOutlineUser className="naviconhgf554"/><Link to="/login">Login</Link></h1>
            
          }
            
              <div style={{display:"inline-flex",border:"0px solid black"}} className="acountbuton20"><Link to="/cart" ><CiShoppingCart className="naviconhgf5545"/> </Link><b style={{color:"white",backgroundColor:"#FF8F20",padding:"0px 5px 0px 5px",borderRadius:"45%",marginLeft:"-10px",marginBottom:"18px"}} >{cartCount?cartCount:0}</b></div>
            
            
          </div>
        </div>
        
      </div>     
     
     
    </>
  );
};

      