import styles from '../../Styles/Sidebar.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import weblogo from "../asset/webLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'

export const Sidebar = ({close}) => {




  return (
    <div className={styles.container} >

<div className={styles.head} >
    <Link to="/">
<img src={weblogo} alt='logo'/>
    </Link>
  <FontAwesomeIcon className={styles.close} onClick={close} icon={faXmark}/>
</div>
<Link onClick={close} to="/products/wheyproteins">
    Whey Proteins
    </Link>
  
    <Link  onClick={close}  to="/products/wheyproteins">
        MB Fuel One
    </Link>
  

    <Link  onClick={close}  to="/products/wheyproteins">
        bGREEN
    </Link>
  

    <Link  onClick={close}  to="/products/wheyproteins">
        MuscleTech
    </Link>
  

    <Link  onClick={close}  to="/products/wheyproteins">
        Labrada
    </Link>
  


    </div>
  )
}
