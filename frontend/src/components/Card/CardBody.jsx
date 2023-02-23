import React,{useEffect,useState} from 'react'
import axios from "axios"
import { Box,HStack,Heading,Flex} from '@chakra-ui/react'
import CartItem from './CarTItem'
import TotalPrice from"./TotalPrice"
import {useSelector,useDispatch} from "react-redux"
import {  getCardData } from '../../redux/Cart/action'




const CartBody = () => {

   const dispatch=useDispatch()
   const data=useSelector(store=>store.cartReducer.cart)||[]

    useEffect(()=>{
       dispatch(getCardData())
    },[])

   
    

    
  return (
    
    <Flex justifyContent="space-around" direction={{base:"column-reverse",lg:"row"}}  >
   <Box  >
   <HStack justifyContent="space-between" p={2}>
   <Heading as="h3" size="sm">Shopping Cart ( {data.length} items )</Heading>
   <Heading as="h6" size="xm" color="#00b5b7">My Wishlist</Heading>
   </HStack>
   <Box>
   {data && data?.map(ele=>(
    <CartItem key={ele._id}  ele={ele}/>
 ))}
   
</Box>
</Box>
   <Box p={5}>
   <TotalPrice data={data}/>
   </Box>
   </Flex>

   
  )
}

export default CartBody