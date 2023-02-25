import React from 'react'
import styles from '../../Styles/Products/ProductCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'
import { faStar,faHeart,faCartShopping,faArrowRight } from '@fortawesome/free-solid-svg-icons'

import {Link, Navigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import { addToCart } from '../../redux/Cart/action'
import { updateCart } from '../../redux/Cart/action'
// import { getCardData } from '../../redux/Cart/action'





export const ProductCard = ({_id,name,image,stock,quantity,premium,mrp,price,discount,code,product_benefits,reviews,rating,flavour,description,category}) => {


const [heart,setHeart] = React.useState(true)

const[cartButton,setCartButton] = React.useState(false)

const [wishlistData,setWishlistData] = React.useState([])
const [CartData,setCartData]  = React.useState([])

const dispatch = useDispatch()

const {token} = useSelector((store)=>{
    return {token:store.authReducer.token}
  })
  

// const userLoggedId = useSelector((store)=>{
//     return {userLoggedId:store.authReducer.userDetails._id}
// })

// console.log(wishlistData,token)
// console.log(CartData,"there is the cart data")




React.useEffect(()=>{

        axios.get("http://localhost:8000/wishlist",{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
           
            if(res.data[0]){
                setWishlistData(res.data)
                let x= false
                for(let i =0; i<res.data.length; i++){
                    if(res.data[i].name==name
                        //  && res.data[i].user==userLoggedId
                         ){
                        setHeart(false)
                        x = true
                        break;
                    }
                }

            }
        })
        .catch((err)=>console.log(err))

// ------------------------------------------------------------------------------------------------
        axios.get("http://localhost:8000/cart",{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
            // console.log(res.data)
            if(res.data[0]){
                setCartData(res.data)
                for(let i =0; i<res.data.length; i++){
                    if(res.data[i].name==name 
                        // && res.data[i].user == userLoggedId
                        ){
                        setHeart(false)
                        break;
                    }
                }

            }
        })
        .catch((err)=>console.log(err))
    
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
    baseURL:`http://localhost:8000/wishlist/delete/${deleteId}`,
    headers:{
        Authorization:token
    }
})
    }
    else{
        let obj = {
            name,image,stock,quantity,premium,mrp,price,discount,code,product_benefits,reviews,rating,flavour,description,category
        }
        
axios({
    method:"post",
    baseURL:"http://localhost:8000/wishlist/add",
    data:obj,
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




const HandleAddtoCart = ()=>{

    if(token){
        let x = false
        let quantity;
        let patchId = "nothing"
        for(let i=0; i<CartData.length; i++){
            if(CartData[i].name==name 
                // && CartData[i].user == userLoggedId
                ){
x = true

patchId = CartData[i]._id
quantity = CartData[i].quantity
    }
}
    if(x){
        quantity  = +quantity + 1
        console.log(quantity,"new quantity")
axios({
    method:"patch",
    baseURL:`http://localhost:8000/cart/update/${patchId}`,
    headers:{
        Authorization:token
    },
    data:{quantity:quantity}
})
.then((res)=>{

})
.catch((err)=>console.log(err))
    }
    else{
        let obj = {
            name,image,stock,quantity:1,premium,mrp,price,discount,code,product_benefits,reviews,rating,flavour,description,category
        }
        dispatch(addToCart(obj))




.then((res)=>{
// console.log(res)
})
.catch((err)=>{
    console.log(err)
})
    }

setCartButton(true)

}
else{
    return <Navigate to="/login"/>
}


}














  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <Link className={styles.top} to={`/products/wheyproteins/${_id}`}>

            <img  src={image[0]} alt={name}/>
            </Link>

{token ? 
            <div style={{position:"relative"}}>
    <FontAwesomeIcon   onClick={HandleWishlist} style={{color:heart?"black":"red"}} className={styles.heart} icon={heart?faRegularHeart:faHeart}/>

             <span  className={styles.tooltiptext}>
                {heart==true?"Add to wishlist":"Added to wishlist"}
             
             </span>
            </div>
            
        :
  <Link to='/login'>
         <div style={{position:"relative"}}>
    <FontAwesomeIcon   style={{color:heart?"black":"red"}} className={styles.heart} icon={heart?faRegularHeart:faHeart}/>

             <span  className={styles.tooltiptext}>
                {heart==true?"Add to wishlist":"Added to wishlist"}
             
             </span>
            </div> 
  </Link>      
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
(token ?
    <div onClick={HandleAddtoCart} className={styles.cartContainer}>
    <FontAwesomeIcon className={styles.cart} icon={faCartShopping}/>
    <span>Add to Cart</span>
</div>
:
    <Link to="/login">

<div className={styles.cartContainer}>
    <FontAwesomeIcon className={styles.cart} icon={faCartShopping}/>
    <span>Add to Cart</span>
</div>
    </Link>
   
)
    
}


        </div>
    </div>
  )
}
