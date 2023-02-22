import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import styles from '../../Styles/Products/ProductCard.module.css'

export const SolidHeart = ({setHeart}) => {
  return (
    <FontAwesomeIcon onClick={()=>setHeart(false)} className={styles.solidheart} icon={faHeart}/>
  )
}
