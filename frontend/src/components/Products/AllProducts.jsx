import React from 'react'
import styles from '../../Styles/Products/AllProducts.module.css'
import { useSelector } from 'react-redux'
import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'
import { Center } from '@chakra-ui/react'

export const AllProducts = ({totalItem,page,limit,setPage,setLimit}) => {



const {isLoading,products} = useSelector((store)=>{
    return {products:store.productsReducer.products,isLoading:store.productsReducer.isLoading}
})





  return (
    <>
    <div className={styles.container}>

 {isLoading? 
<div className={styles.loader}>

 <img src='https://media.tenor.com/eL-cXQYmRjQAAAAC/loading-load.gif' alt='Loading...'/>
 </div>
 :(products.map((el)=>(
   
   <ProductCard key={el._id} {...el}/>
   
   )))}  

    </div>
    {isLoading?null: 
<Pagination totalItem={totalItem} page={page} limit={limit} setPage={setPage} setLimit={setLimit} />
    }
    
   </>
  )
}
