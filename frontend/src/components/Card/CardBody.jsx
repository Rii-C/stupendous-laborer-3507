import React,{useEffect,useState} from 'react'
import axios from "axios"
import { Box,HStack,Heading,Flex} from '@chakra-ui/react'
import CartItem from './CarTItem'
import TotalPrice from"./TotalPrice"


const getdata=()=>{
    return  axios.get("http://localhost:8080/data")
}

const CartBody = () => {

    const[data,setData]=useState([])

    useEffect(()=>{
        getdata().then(res=>{
            console.log(res.data)
        setData(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    
  return (
    
    <Flex justifyContent="space-around" direction={{base:"column-reverse",lg:"row"}}  >
   <Box  >
   <HStack justifyContent="space-between" p={2}>
   <Heading as="h3" size="sm">Shopping Cart ( 6 items )</Heading>
   <Heading as="h6" size="xm" color="#00b5b7">My Wishlist</Heading>
   </HStack>
   <Box>
   {data?.map(ele=>(
    <CartItem  {...ele}/>
 ))}
   
</Box>
</Box>
   <Box p={5}>
   <TotalPrice/>
   </Box>
   </Flex>

   
  )
}

export default CartBody