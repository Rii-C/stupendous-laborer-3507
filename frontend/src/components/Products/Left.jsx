import React from 'react'
import styles from '../../Styles/Products/Left.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const Left = () => {

const [offer,setOffer] = React.useState(false)
const [brand,setBrand] = React.useState(false)
const [discount,setDiscount] = React.useState(false)
const [rating,setRating] = React.useState(false)
const [price,setPrice] = React.useState(false)
const [life,setLife] = React.useState(false)
const [gender,setGender] = React.useState(false)


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
<input type="radio"/>
<span>Snack Bar 6 Bar Choco Almond @ Rs. 229</span>
</div>

<div>
<input type="radio"/>
<span>MuscleBlaze Fish Oil 60 Softgels @ Rs. 474</span>
</div>

<div>
<input type="radio"/>
<span>Get High Protein Muesli @Rs. 99</span>
</div>

<div>
<input type="radio"/>
<span>Extra 5% Off On Nutrabay</span>
</div>

<div>
<input type="radio"/>
<span>Get HealthKart Multivitamin 30 Tabs @Rs. 155</span>
</div>

<div>
<input type="radio"/>
<span>Get HealthKart Fish Oil 60 Tabs @Rs. 249</span>
</div>

<div>
<input type="radio"/>
<span>Get MuscleBlaze Fish Oil 30 Tabs @Rs. 299</span>
</div>

<div>
<input type="radio"/>
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



<h2>By Brand</h2>
</div>
<div className={styles.clear}>
    Clear
</div>
</div>




 {
    life?null:
    <>
<div className={styles.input}>
<input  type="text" placeholder='Search By Brand' />
</div>


<div className={styles.brandAlign}>
<div>
    <div>
<input type="checkbox"/>
<span>HealthKart</span>
        </div>
        <div>
1
            </div>
</div>

<div>
    <div>
<input type="checkbox"/>
<span>MuscleBlaze</span>
</div>
<div>
    147
    </div>
</div>

<div>
    <div>
<input type="checkbox"/>
<span>ON</span>
</div>
<div>
    20
    </div>
</div>




<div>
<div>
<input type="checkbox"/>
<span>Ultimate Nutrition</span>
</div>

<div>
    1
    </div>
</div>






<div>
    <div>
<input type="checkbox"/>
<span>Myprotein</span>
</div>
<div>
    16
    </div>
</div>

<div>
    <div>
<input type="checkbox"/>
<span>Muscle Tech</span>
</div>
<div>
    23
    </div>
</div>




<div>
<div>
<input type="checkbox"/>
<span>Dymatize</span>
</div>
<div>
    4
</div>
</div>

<div>
<div>
<input type="checkbox"/>
<span>Labrada</span>
</div>
<div>
    1
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
<div className={styles.clear}>
    Clear
</div>

</div>

{
    discount?null:
    
<div className={styles.discountAlign}>
<div>
<input type="radio"/>
<span>20% And Above</span>
</div>

<div>
<input type="radio"/>
<span>40% And Above</span>
</div>

<div>
<input type="radio"/>
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
<div className={styles.clear}>
    Clear
</div>

</div>

{
    rating?null:
    
<div className={styles.discountAlign}>
<div>
<input type="radio"/>
<span>4 Ratinhg & Above</span>
</div>

<div>
<input type="radio"/>
<span>3 Ratinhg & Above</span>
</div>

<div>
<input type="radio"/>
<span>2 Ratinhg & Above</span>
</div>

<div>
<input type="radio"/>
<span>1 Ratinhg & Above</span>
</div>


</div>

}

        </div>




{/* --------------------------------- */}


<div className={styles.discount}>


<div className={styles.align}>
<div>
    {
        price ? <FontAwesomeIcon onClick={()=>setPrice(!price)} className={styles.up} icon={faChevronDown}/>: <FontAwesomeIcon onClick={()=>setPrice(!price)}  className={styles.up} icon={faChevronUp}/>
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
