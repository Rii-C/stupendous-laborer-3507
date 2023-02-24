import React from 'react'
import styles from '../../Styles/ProductDetails/Right.module.css'
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight ,faHeart as faSolidHeart,faCoins,faCartShopping ,faBowlRice,faPercent} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import StarRatings from 'react-star-ratings';




export const Right = () => {

const [add,setAdd] = React.useState(false)
const [addMsg,setAddMsg] = React.useState("Add to wishlist")


const [showDay,setShowDay] = React.useState(4)
const [showMonth,setShowMonth] = React.useState("January")


const [prdQuantity,setPrdQuantity] = React.useState(1)

const HandleDecrement = ()=>{
if(prdQuantity>1){
setPrdQuantity(prdQuantity-1)
}
}

const HandleIncrement = ()=>{
  setPrdQuantity(prdQuantity + 1)
}

const HandleAddtoCart = ()=>{
  setPrdQuantity(1)
}



React.useEffect(()=>{

  let d = new Date()
  let day = d.getDate()
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let month = months[d.getMonth()];
  let year = d.getFullYear()
  

  if(month ==months[3] || month==months[5] || month==months[8] || month==months[10]){
    if(day>=29){
      month = months[month+1]
    }
   day = (day+2)%30

  }
else if(month==months[1]){

  

  if(year%4==0){
    if(day>=28){
      month = months[month+1]
    }
day = (day+2)%29 
  }else{
    if(day>=27){
      month = months[month+1]
    }
    day = (day+2)%28 
  }
}

else{
 

  if(month==months[months.length-1] && day>29){
    month = months[0]
  }
  else  if(day>29){
    month = months[month+1]
  }

  day = (day+2)%31
}
  setShowDay(day)
  setShowMonth(month)

},[])




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

{
  add==false? 

<div style={{position:"relative",paddingLeft:"5%"}}>
<span  className={styles.tooltiptext}>Add to wislist</span>
<img className={styles.staringImage} onClick={HandleAdd} src={"https://static1.hkrtcdn.com/hknext/static/media/pdp/unliked_product.svg"} alt="Add to wishlist"/>
</div>
:
<div style={{position:"relative",paddingLeft:"5%"}}>
<span  className={styles.tooltiptext}>Added to wislist</span>
<img className={styles.staringImage} onClick={HandleAdd} src={"https://static1.hkrtcdn.com/hknext/static/media/pdp/liked_product.svg"} alt="Add to wishlist"/>
</div>
}

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
    <button onClick={HandleDecrement} >-</button>
    <div>{prdQuantity}</div>
    <button onClick={HandleIncrement}>+</button>
  </div>
  <div onClick={HandleAddtoCart} className={styles.cartbtn}>
    <FontAwesomeIcon className={styles.carticon} icon={faCartShopping}/>
    <span>Add to Cart</span>
  </div>
  <div className={styles.quickBuy}>
    Quick Buy
  </div>
</div>



<div className={styles.flavourBox}>
  <FontAwesomeIcon icon={faBowlRice}/>
  <span>Flavour</span>
</div>


<div className={styles.flavour}>
{data.flavour}
</div>



<div className={styles.offerContainer}>
  <p className={styles.offer}>Special Offers</p>
  <p className={styles.coupon}>With these offers and coupons</p>

  <div className={styles.tc}>
    <FontAwesomeIcon className={styles.percentIcon} icon={faPercent}/>
    <span>Get MuscleBlaze Fish oil 30 Tabs @Rs. 299</span>
    <span>T&C</span>
  </div>

  <div className={styles.tc}>
    <FontAwesomeIcon className={styles.percentIcon} icon={faPercent}/>
    <span>MB CreaPRO @Rs. 599 || Flat 33% Off</span>
    <span>T&C</span>
  </div>


  <div></div>
</div>

    </>

   }
      </div>
  )
}
