import React from 'react'
import styles from '../../Styles/ProductDetails/Right.module.css'
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight ,faHeart as faSolidHeart,faCoins,faCartShopping ,faBowlRice} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import StarRatings from 'react-star-ratings';



export const Right = () => {

const [add,setAdd] = React.useState(false)
const [addMsg,setAddMsg] = React.useState("Add to wishlist")


const [showDay,setShowDay] = React.useState(4)
const [showMonth,setShowMonth] = React.useState("January")

React.useEffect(()=>{

  let d = new Date()
  let day = d.getDate()
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let month = months[d.getMonth()];

  if(day>=28){
    day = 3
    month = months[d.getMonth()+1]
    if(month==months[months.length-1]){
      month = months[0]
    }
  }

  else{
 day  = day+2
  }

  setShowDay(day)
  setShowMonth(month)

},[])

console.log(showDay,showMonth)


const HandleAdd = ()=>{

  let x = add
  if(x===false){
setAdd(true)
setAddMsg("Add to wishlist")
  }
  else{
setAdd(false)
setAddMsg("Added to wishlist")
  }
}



const {data,isLoading}  = useSelector((store)=>{
  return {data:store.productDetailsReducer.data,isLoading:store.productDetailsReducer.isLoading}
})






  return (
    <div className={styles.container}>
   {
    data &&   
    
    <>
    
    <span className={styles.head}>Whey Proteins</span>

    <p className={styles.name}>{data.name}</p>

    <div className={styles.bygnc}>
      <span className={styles.by}>By</span> <span className={styles.gnc}>GNC</span>
      <FontAwesomeIcon className={styles.rightIcon} icon={faChevronRight}/>
    </div>




{/* ----------------------------- */}

    <div className={styles.staringContainer}>
    <div className={styles.staring}>
<StarRatings
          rating={data.rating}
          starRatedColor="#1fbdc6"
          starDimension="22px"
          starSpacing='2px'
          name='rating'
        /> 
<span>
<span className={styles.rating}>{data.rating}</span> {`(`} {data.reviews} Reviews {`)`}
</span>
</div>

<img className={styles.staringImage} onClick={HandleAdd} src={add==false? "https://static1.hkrtcdn.com/hknext/static/media/pdp/unliked_product.svg":"https://static1.hkrtcdn.com/hknext/static/media/pdp/liked_product.svg"} alt="Add to wishlist"/>

<img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/share_icon.svg" alt='link'/>
    </div>

{/* ------------------------------------------ */}

{/* ₹ */}

<div className={styles.mrp}>
MRP: <span className={styles.mr}>₹{data.mrp}</span>

</div>


<div className={styles.priceContainer}>
<span>
  Price: ₹{data.price}
</span>
<span>{data.discount}% off</span>
<span>Get 196 HK Cash 
  <FontAwesomeIcon style={{fontSize:"14px"}} className={styles.coin} icon={faCoins}/>
</span>
</div>


<div className={styles.taxes}>
Inclusive of all taxes
</div>


<div className={styles.date}>
  <span>Get it by {`${showDay} ${showMonth}`}</span><span>+</span><span>Free Shipping</span>
</div>



<div className={styles.premiumBox}>
  <span>
    <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/rounded_star_highlight.svg" alt='star'/>
  </span>
  <span>
  ₹{data.premium}
  </span>
  <span>
    for Premium Member 
    <FontAwesomeIcon className={styles.chevronRight} icon={faChevronRight}/>
  </span>
</div>


{/* --------------------------------------- */}

<div className={styles.btnContainer}>
  <div className={styles.plusminus}>
    <button>-</button>
    <div></div>
    <button>+</button>
  </div>
  <div>
    <FontAwesomeIcon icon={faCartShopping}/>
    <span>Add to Cart</span>
  </div>
  <div>
    Quick Buy
  </div>
</div>









    </>

   }
      </div>
  )
}
