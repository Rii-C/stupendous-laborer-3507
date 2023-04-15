import React, { Fragment, useEffect } from "react";
import  "./Navbar.css";
import styles from "../../Styles/Navbar.module.css";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { Sidebar } from "./Sidebar";

export const Navbar = () => {

  const [show,setShow] = React.useState(false)

  const dispatch = useDispatch()
  const cartCount=useSelector(store=>store.cartReducer.cartCount)
  const {token} = useSelector((store)=>{
    return {token:store.authReducer.token}
  })
  
  useEffect(()=>{
    dispatch(getCardData(token))
      },[])
     
const open = ()=>{
  setShow(true)
}

const close = ()=>{
  setShow(false)
}

  const handleLog = () =>{
 
      localStorage.setItem("token", JSON.stringify(null))
      dispatch(isNotAuth(null))
  }

  const navigate=useNavigate()
  return (
    <>
  {
    show &&   <Sidebar close={close}  />
  }
    <nav className={styles.container} >

<Link to="/">
  <img src={weblogo} alt="logo"/>

</Link>

<div className={styles.search}>
          <button className={styles.searchbtn}><FiSearch /></button>
         
            <SearchBar/>
        </div>


<div className={styles.side} >


        <div className={styles.status}>
      {
        token?
        <button className={styles.login}  onClick={handleLog}>Log out</button>
        :
        <button className={styles.login}><Link to="/login">Login</Link></button>
        
      }
      </div>

      <div className={styles.cart}><Link to="/cart" ><CiShoppingCart className="naviconhgf5545"/> </Link><b>
            {/* {cartCount?cartCount:0} */}
       </b></div>

<button className={styles.menu} ><FontAwesomeIcon className={styles.bars} onClick={open} icon={faBars}/></button>
        </div>


    </nav>
    </>
  );
};

     