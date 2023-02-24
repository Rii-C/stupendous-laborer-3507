import React from 'react'
import styles from '../../Styles/Products/ProductCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'
import { faStar,faHeart,faCartShopping,faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { SolidHeart } from './SolidHeart'
import {Link} from 'react-router-dom'


export const ProductCard = ({_id,name,image,stock,mrp,price,discount,reviews,rating,quantity,premium}) => {


const [heart,setHeart] = React.useState(true)

const[cartButton,setCartButton] = React.useState(false)



  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <Link className={styles.top} to={`/products/wheyproteins/${_id}`}>

            <img  src={image[0]} alt={name}/>
            </Link>
            {heart?<div style={{position:"relative"}}>
            {/* <SolidHeart setHeart={setHeart} /> */}
    <FontAwesomeIcon onClick={()=>setHeart(false)} className={styles.solidheart} icon={faRegularHeart}/>

             <span  className={styles.tooltiptext}>Add to wishlist</span>
            </div>:
            <div  style={{position:"relative"}}>
         <FontAwesomeIcon onClick={()=>setHeart(true)} className={styles.heart} icon={faHeart}/>
         <span  className={styles.tooltiptext}>Added to wislist</span>
         </div>
        }

        </div>



        <div className={styles.details}>




            <div className={styles.ratingReviews}>
                <div className={styles.one}>
                <div className={styles.ratebox}>
                    <span>{rating}</span>
                    <FontAwesomeIcon className={styles.star} icon={faStar}/>
                </div>
                <div className={styles.reviews}>{reviews} reviews</div>
                </div>
               <img className={styles.mark} src="https://static1.hkrtcdn.com/hknext/static/media/common/variant/Vegetarian.svg" alt='mark'/>
            </div>

<div className={styles.name}>
    {name}
</div>



<div className={styles.priceDiscount} >
{/* ₹ */}
<span className={styles.price}>₹{price}</span>
<span className={styles.mrp}>₹{mrp}</span>
<span className={styles.discount}>{discount}% off</span>

</div>

<div className={styles.premiumBox}>
  <img  src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg" alt="star"/>

<span>₹{premium} for Premium Member</span>
</div>




{
    cartButton ?
<Link to='/cart'>
<div className={styles.goContainer}>
    <span>Go to Cart</span>
    <FontAwesomeIcon className={styles.gocart} icon={faArrowRight}/>
</div>
</Link>

: 
<div onClick={()=>setCartButton(true)} className={styles.cartContainer}>
    <FontAwesomeIcon className={styles.cart} icon={faCartShopping}/>
    <span>Add to Cart</span>
</div>
    
}


        </div>
    </div>
  )
}
