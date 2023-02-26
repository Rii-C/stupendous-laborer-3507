import React from 'react'
import styles from '../../Styles/Products/Left.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const Left = ({discountFilter,setDiscountFilter,ratingFilter,setRatingFilter,category,setCategory,HandleCategory}) => {

const [offer,setOffer] = React.useState(false)
const [brand,setBrand] = React.useState(false)
const [discount,setDiscount] = React.useState(false)
const [rating,setRating] = React.useState(false)
const [price,setPrice] = React.useState(false)
const [life,setLife] = React.useState(false)
const [gender,setGender] = React.useState(false)



const HandleDiscountFilter = (ischecked,value)=>{
   setDiscountFilter({ischecked,value})
}

const ClearDiscountFilter = ()=>{
    setDiscountFilter({ischecked:false,value:""})
}

const HandleRatingFilter = (ischecked,value)=>{
    setRatingFilter({ischecked,value})
 }
 
 const ClearRatingFilter = ()=>{
     setRatingFilter({ischecked:false,value:""})
 }
 



const ClearCategory = ()=>{
setCategory([])
}




  return (
    <>
    <div className={styles.container}>
        <h1 className={styles.head}>Browse By</h1>


        <div className={styles.child}>


<div className={styles.align}>
<div>
    {
        offer ? <FontAwesomeIcon onClick={()=>setOffer(!offer)} className={styles.up} icon={faChevronDown}/>: <FontAwesomeIcon onClick={()=>setOffer(!offer)}  className={styles.up} icon={faChevronUp}/>
    }



<h2>Offers</h2>
</div>
<div className={styles.clear}>
    Clear
</div>

</div>

{
    offer?null:

<div className={styles.itemAlign}>
<div>
<input name='offer' type="radio"/>
<span>Snack Bar 6 Bar Choco Almond @ Rs. 229</span>
</div>

<div>
<input  name='offer' type="radio"/>
<span>MuscleBlaze Fish Oil 60 Softgels @ Rs. 474</span>
</div>

<div>
<input  name='offer' type="radio"/>
<span>Get High Protein Muesli @Rs. 99</span>
</div>

<div>
<input  name='offer' type="radio"/>
<span>Extra 5% Off On Nutrabay</span>
</div>

<div>
<input  name='offer' type="radio"/>
<span>Get HealthKart Multivitamin 30 Tabs @Rs. 155</span>
</div>

<div>
<input  name='offer' type="radio"/>
<span>Get HealthKart Fish Oil 60 Tabs @Rs. 249</span>
</div>

<div>
<input  name='offer' type="radio"/>
<span>Get MuscleBlaze Fish Oil 30 Tabs @Rs. 299</span>
</div>

<div>
<input  name='offer' type="radio"/>
<span>MB CreaPRO @Rs. 599 || Flat 33% Off</span>
</div>

</div>

}

        </div>




<div className={styles.filter}>
    <span>Filter Options</span>
<span>Reset All</span>
</div>


<div className={`${styles.child} ${styles.childx}`}>
<input type="checkbox"/>
<span>BestSeller</span>
</div>











<div className={styles.child}>


<div className={styles.align}>
<div>
    {
        life ? <FontAwesomeIcon onClick={()=>setLife(!life)} className={styles.up} icon={faChevronDown}/>: <FontAwesomeIcon onClick={()=>setLife(!life)}  className={styles.up} icon={faChevronUp}/>
    }



<h2>By Category</h2>
</div>
<div onClick={ClearCategory} className={styles.clear}>
    Clear
</div>
</div>




 {
    life?null:
    <>
<div className={styles.input}>
<input  type="text" placeholder='Search By Category' />
</div>


<div className={styles.brandAlign}>
<div>
    <div>
<input onChange={HandleCategory} value="Whey Proteins" type="checkbox"/>
<span>Whey Proteins</span>
        </div>
        <div>

            </div>
</div>

<div>
    <div>
<input onChange={HandleCategory}  value="Pre-Workout" type="checkbox"/>
<span>Pre-Workout</span>
</div>
<div>
    
    </div>
</div>

<div>
    <div>
<input  onChange={HandleCategory} value="Fish Oil" type="checkbox"/>
<span>Fish Oil</span>
</div>
<div>
    
    </div>
</div>




<div>
<div>
<input onChange={HandleCategory}  value="Raw Whey Proteins" type="checkbox"/>
<span>Raw Whey Proteins</span>
</div>

<div>
    
    </div>
</div>






<div>
    <div>
<input  onChange={HandleCategory} value="Oats" type="checkbox"/>
<span>Oats</span>
</div>
<div>
    
    </div>
</div>

<div>
    <div>
<input onChange={HandleCategory}  value="Peanut Butter" type="checkbox"/>
<span>Peanut Butter</span>
</div>
<div>
    
    </div>
</div>




<div>
<div>
<input  onChange={HandleCategory} value="Muesli" type="checkbox"/>
<span>Dymatize</span>
</div>
<div>
    
</div>
</div>

<div>
<div>
<input  onChange={HandleCategory} value="Protein Bars" type="checkbox"/>
<span>Protein Bars</span>
</div>
<div>  
</div>
</div>


<div>
<div>
<input onChange={HandleCategory}  value="Raw Whey Proteins" type="checkbox"/>
<span>Raw Whey Proteinss</span>
</div>
<div>  
</div>
</div>


<div>
<div>
<input onChange={HandleCategory}  value="Mass Gainers" type="checkbox"/>
<span>Mass Gainers</span>
</div>
<div>  
</div>
</div>

<div>
<div>
<input onChange={HandleCategory}  value="collagen" type="checkbox"/>
<span>Collagen</span>
</div>
<div>  
</div>
</div>

<div>
<div>
<input onChange={HandleCategory}  value="Whey Protein Isolate" type="checkbox"/>
<span>Whey Protein Isolate</span>
</div>
<div>  
</div>
</div>


<div>
<div>
<input onChange={HandleCategory}  value="L-Arginine" type="checkbox"/>
<span>L-Arginine</span>
</div>
<div>  
</div>
</div>


<div>
<div>
<input  onChange={HandleCategory} value="Multivitamins - General" type="checkbox"/>
<span>Multivitamins - General</span>
</div>
<div>  
</div>
</div>

<div>
<div>
<input onChange={HandleCategory}  value="Vitamin D" type="checkbox"/>
<span>Vitamin D</span>
</div>
<div>  
</div>
</div>

<div>
<div>
<input onChange={HandleCategory}  value="Whey Protein for Beginners" type="checkbox"/>
<span>Whey Protein for Beginners</span>
</div>
<div>  
</div>
</div>



<div>
<div>
<input onChange={HandleCategory}  value="Creatine" type="checkbox"/>
<span>Creatine</span>
</div>
<div>  
</div>
</div>



<div>
<div>
<input onChange={HandleCategory}  value="Amino Acids / BCAAs" type="checkbox"/>
<span>Amino Acids / BCAAs</span>
</div>
<div>  
</div>
</div>



<div>
<div>
<input onChange={HandleCategory}  value="Speciality Shampoo" type="checkbox"/>
<span>Speciality Shampoo</span>
</div>
<div>  
</div>
</div>





<div>
<div>
<input  onChange={HandleCategory} value="Biotin" type="checkbox"/>
<span>Biotin</span>
</div>
<div>  
</div>
</div>



<div>
<div>
<input onChange={HandleCategory}  value="Speciality Shampoo" type="checkbox"/>
<span>Speciality Shampoo</span>
</div>
<div>  
</div>
</div>




</div>
</>
} 





{/* ----------------------------------- */}

<div className={styles.discount}>


<div className={styles.align}>
<div>
    {
        discount ? <FontAwesomeIcon onClick={()=>setDiscount(!discount)} className={styles.up} icon={faChevronDown}/>: <FontAwesomeIcon onClick={()=>setDiscount(!discount)}  className={styles.up} icon={faChevronUp}/>
    }



<h2>Discount</h2>
</div>
<div onClick={ClearDiscountFilter} className={styles.clear}>
    Clear
</div>

</div>

{
    discount?null:
       
<div className={styles.discountAlign}>
<div>
<input 
onClick={()=>HandleDiscountFilter(true,20)}
checked={discountFilter.ischecked==true?(discountFilter.value==20?true:false):false} type="radio"/>
<span>20% And Above</span>
</div>

<div>
<input  
onClick={()=>HandleDiscountFilter(true,40)}
 checked={discountFilter.ischecked==true?(discountFilter.value==40?true:false):false} type="radio"/>
<span>40% And Above</span>
</div>

<div>
<input  
onClick={()=>HandleDiscountFilter(true,60)}
checked={discountFilter.ischecked==true?(discountFilter.value==60?true:false):false} type="radio"/>
<span>60% And Above</span>
</div>


</div>

}

        </div>



{/* --------------------------------- */}


<div className={styles.discount}>


<div className={styles.align}>
<div>
    {
        rating ? <FontAwesomeIcon onClick={()=>setRating(!rating)} className={styles.up} icon={faChevronDown}/>: <FontAwesomeIcon onClick={()=>setRating(!rating)}  className={styles.up} icon={faChevronUp}/>
    }



<h2>Ratings</h2>
</div>
<div onClick={ClearRatingFilter} className={styles.clear}>
    Clear
</div>

</div>

{
    rating?null:
    
<div className={styles.discountAlign}>
<div>
<input
onClick={()=>HandleRatingFilter(true,4)}
checked={ratingFilter.ischecked==true?(ratingFilter.value==4?true:false):false}
 type="radio"/>
<span>4 Rating & Above</span>
</div>

<div>
<input
onClick={()=>HandleRatingFilter(true,3)}
checked={ratingFilter.ischecked==true?(ratingFilter.value==3?true:false):false}
 type="radio"/>
<span>3 Rating & Above</span>
</div>

<div>
<input
onClick={()=>HandleRatingFilter(true,2)}
checked={ratingFilter.ischecked==true?(ratingFilter.value==2?true:false):false}
name="rating" type="radio"/>
<span>2 Rating & Above</span>
</div>

<div>
<input
onClick={()=>HandleRatingFilter(true,1)}
checked={ratingFilter.ischecked==true?(ratingFilter.value==1?true:false):false}
 type="radio"/>
<span>1 Rating & Above</span>
</div>


</div>

}

        </div>




{/* --------------------------------- */}


<div className={styles.discount}>


<div className={styles.align}>
<div>
    {
        price ? <FontAwesomeIcon  onClick={()=>setPrice(!price)} className={styles.up} icon={faChevronDown}/>: <FontAwesomeIcon onClick={()=>setPrice(!price)}  className={styles.up} icon={faChevronUp}/>
    }



<h2>Price</h2>
</div>
<div className={styles.clear}>
    {/* Clear */}
</div>

</div>

{
    price?null:
    
<div className={styles.discountAlign}>
<div>
<input type="checkbox"/>
<span>800 And Below</span>
</div>

<div>
<input type="checkbox"/>
<span>801-2,500</span>
</div>

<div>
<input type="checkbox"/>
<span>2,501-4200</span>
</div>

<div>
<input type="checkbox"/>
<span>4201-6000</span>
</div>

<div>
<input type="checkbox"/>
<span>6001-7,800</span>
</div>

<div>
<input type="checkbox"/>
<span>7,801-9,600</span>
</div>


</div>

}

        </div>


{/* ------------------------------------------ */}



<div className={styles.lifestyle}>


<div className={styles.align}>
<div>
    {
        brand ? <FontAwesomeIcon onClick={()=>setBrand(!brand)} className={styles.up} icon={faChevronDown}/>: <FontAwesomeIcon onClick={()=>setBrand(!brand)}  className={styles.up} icon={faChevronUp}/>
    }





<h2>Lifestage</h2>
</div>
<div className={styles.clear}>
    
</div>
</div>


 {
    brand?null:
    <>

<div className={styles.lifeAlign}>
<div>
    <div>
<input type="checkbox"/>
<span>Adult</span>
        </div>
        <div>
757
            </div>
</div>

</div>
</>
} 

</div>


{/* ----------------------------- */}


<div className={styles.lifestyle}>


<div className={styles.align}>
<div>
    {
        gender ? <FontAwesomeIcon onClick={()=>setGender(!gender)} className={styles.up} icon={faChevronDown}/>: <FontAwesomeIcon onClick={()=>setGender(!gender)}  className={styles.up} icon={faChevronUp}/>
    }





<h2>Gender</h2>
</div>
<div className={styles.clear}>
    
</div>
</div>


 {
    gender?null:
    <>

<div className={styles.lifeAlign}>
<div>
    <div>
<input type="checkbox"/>
<span>Men</span>
        </div>
        <div>
755
            </div>
</div>

<div>
    <div>
<input type="checkbox"/>
<span>Women</span>
        </div>
        <div>
339
            </div>
</div>

</div>
</>
} 

</div>

{/* ----------------------- */}





</div> 





    </div>

    </>
  )
}
