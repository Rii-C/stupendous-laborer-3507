import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../../Styles/Products/Nav.module.css'
import {Link} from 'react-router-dom'


export const Nav = () => {
  return (
  <div className={styles.container}>
<Link to="/">
<FontAwesomeIcon className={styles.home} icon={faHouse}/> 
</Link>
   <FontAwesomeIcon className={styles.right} icon={faChevronRight}/>
    <span className={styles.span}>
    Sports Nutrition
    </span>

    <FontAwesomeIcon className={styles.right} icon={faChevronRight}/>

    <span  className={styles.span}>
    Proteins
    </span>

    
    <FontAwesomeIcon className={styles.right} icon={faChevronRight}/>

    <span className={styles.current}>
    Whey Proteins
    </span>
    
  </div>
  )
}
