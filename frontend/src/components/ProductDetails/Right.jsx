import React from 'react'
import styles from '../../Styles/ProductDetails/Right.module.css'
import {useSelector,useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight ,faHeart as faSolidHeart,faCoins,faCartShopping ,faBowlRice,faPercent} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import StarRatings from 'react-star-ratings';
import { DynamicDate } from './DynamicDate'
import axios from 'axios'
import { addToCart } from '../../redux/Cart/action'
import { Link } from 'react-router-dom'


export const Right = () => {

const [heart,setHeart] = React.useState(true)
const [wishlistData,setWishlistData] = React.useState([])


const [showDay,setShowDay] = React.useState(4)
const [showMonth,setShowMonth] = React.useState("January")
const [prdQuantity,setPrdQuantity] = React.useState(1)
const dispatch = useDispatch()


const {data,isLoading,name}  = useSelector((store)=>{
  return {data:store.productDetailsReducer.data,isLoading:store.productDetailsReducer.isLoading,name:store.productDetailsReducer.data.name}
}) || {data:{},isLoading:false}

const {token} = useSelector((store)=>{
    return {token:store.authReducer.token}
  })




const HandleDecrement = ()=>{
if(prdQuantity>1){
setPrdQuantity(prdQuantity-1)
}
}

const HandleIncrement = ()=>{
  setPrdQuantity(prdQuantity + 1)
}



React.useEffect(()=>{

  // Dynamic-Date------------------------------
 const {day,month} = DynamicDate()
  setShowDay(day)
  setShowMonth(month)
  // ------------------------------------------------------------

// Wishlist-Add-and-Remove------------------------------

  axios.get("https://outstanding-outfit-seal.cyclic.app/wishlist",{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
            // console.log(res.data)
            if(res.data[0]){
                setWishlistData(res.data)
                let x= false
                for(let i =0; i<res.data.length; i++){
                    if(res.data[i].name===name 
                      ){
                        setHeart(false)
                        x = true
                       
                        break;
                    }
                }

            }
        })
        .catch((err)=>console.log(err))
// ------------------------------------------------------



},[])




const HandleWishlist = ()=>{
   if(token){

        
        let x = false
        let deleteId = "nothing"
        for(let i=0; i<wishlistData.length; i++){
            if(wishlistData[i].name==name 
              // && wishlistData[i].user == userLoggedId
              ){
x = true

deleteId = wishlistData[i]._id
    }
}
    if(x){
axios({
    method:"delete",
    baseURL:`https://outstanding-outfit-seal.cyclic.app/wishlist/delete/${deleteId}`,
    headers:{
      Authorization:token
  }
})
    }
    else{
    
        
axios({
    method:"post",
    baseURL:"https://outstanding-outfit-seal.cyclic.app/wishlist/add",
    data:data,
    headers:{
      Authorization:token
  }
})



.then((res)=>{
// console.log(res)
})
.catch((err)=>{
    console.log(err)
})
    }



setHeart(!heart)

}

}




// ---------------------------------------------------

const HandleAddtoCart = ()=>{

    if(token){

      let obj = {
        name:data.name,image:data.image,stock:data.stock,quantity:prdQuantity,premium:data.premium,mrp:data.mrp,price:data.price,discount:data.discount,code:data.code,product_benefits:data.product_benefits,reviews:data.reviews,rating:data.rating,flavour:data.flavour,description:data.description,category:data.category
       }


dispatch(addToCart(obj,token))

}


}
// -----------------------------------



















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




<div style={{position:"relative",paddingLeft:"5%"}}>
<span  className={styles.tooltiptext}>
   {heart===true?"Add to wishlist":"Added to wishlist"}
  </span>
  {
    token ?
<img className={styles.staringImage} onClick={HandleWishlist} src={heart===true?"https://static1.hkrtcdn.com/hknext/static/media/pdp/unliked_product.svg":"https://static1.hkrtcdn.com/hknext/static/media/pdp/liked_product.svg"} alt="wishlist"/>
: <Link to='/login'>
  <img className={styles.staringImage} onClick={HandleWishlist} src={heart===true?"https://static1.hkrtcdn.com/hknext/static/media/pdp/unliked_product.svg":"https://static1.hkrtcdn.com/hknext/static/media/pdp/liked_product.svg"} alt="wishlist"/>
</Link>
}
</div>




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
    {
      token?
      <Link to='/cart'>
    <span>Add to Cart</span>
    </Link>:
    <Link to='/login'>
    <span>Add to Cart</span>
    </Link>
    }
  </div>

  {
      token?
      <Link to='/payment'>
  <div onClick={HandleAddtoCart} className={styles.quickBuy}>
    Quick Buy
  </div>
    </Link>:
    <Link to='/login'>
  <div className={styles.quickBuy}>
    Quick Buy
  </div>
    </Link>
    }

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
