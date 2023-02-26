import React from 'react'
import styles from '../../Styles/Products/Right.module.css'
import StarRatings from 'react-star-ratings';
import { AllProducts } from './AllProducts';
import { useDispatch } from 'react-redux';

export const Right = ({totalItem,page,limit,setPage,setLimit,sortData,setSortData}) => {





  
const HandleSortData = (e)=>{
  setSortData(e.target.value)
}


const dsn = ()=>{

}




  return (
    <>
    <div className={styles.container}>

<div className={styles.poster}>
<img src='https://img9.hkrtcdn.com/23185/bnr_2318418_o.png' alt='Whey Proteins'/>
</div>


<div className={styles.powder}>
  <div>Whey Protein Powder</div>
  <div >
    <img  src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/authentic-plp.svg' alt='tag'/>
 <span> 100% Original & Authentic</span>
  </div>
</div>

<div className={styles.staring}>
<StarRatings
          rating={4.4}
          starRatedColor="#f08e39"
          starDimension="25px"
          starSpacing='2px'
          name='rating'
        /> 
<span>
4.4 {`(`}20.9k Reviews{`)`}
</span>
</div>

<div className={styles.des}>

Whey protein provides all the necessary protein and nutrients, helps in improving great energy levels, and allows you to achieve your bodybuilding goals safely and effectively.
</div>


<div className={styles.sorting}>
  <span className={styles.ra}>{"("}{totalItem} items{")"}</span>
  <div className={styles.sortBox}>
    <span className={styles.sortBy}>Sort by:</span> 
    <select value={sortData} onChange={HandleSortData}>
      <option value="popularity">Popularity</option>
      <option value="pricelth">Price -- Low to High</option>
      <option value="pricehtl">Price -- High to Low</option>
      <option value="discountlth">Discount -- Low to High</option>
      <option value="discounthtl">Discount -- High to Low</option>
      <option value="ratinghtl">Rating -- High to Low</option>
    </select>
  </div>
</div>


<AllProducts totalItem={totalItem} page={page} limit={limit} setPage={setPage} setLimit={setLimit} />

    </div>

    </>
  )
}
