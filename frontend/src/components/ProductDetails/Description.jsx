import React from 'react'
import styles from '../../Styles/ProductDetails/Description.module.css'
import { useSelector } from 'react-redux'

export const Description = () => {

const {description} = useSelector((store)=>{
    return {description:store.productDetailsReducer.data.description}
})


  return (
    <div className={styles.container}>
        {
            description && <>

<div className={styles.Box}>
    <div>
<h1 className={styles.head}>Product Details</h1>

<div className={styles.listContainer}>
    <ul className={styles.list}>

    {
        description.product_details.map((el)=>{
            return <li key={el}>{el}</li>
        })
    }
    </ul>
    </div>
    </div>
   
    <div>

        <div className={styles.supplement}>Supplement Info</div>
    <div className={styles.ImageBox}>
<img src={description.product_information} alt="productDetails"/>
    </div>
    </div>

</div>
            </>
}
        </div>
  )
}
