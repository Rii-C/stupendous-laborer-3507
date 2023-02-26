import React, { useEffect } from 'react'

import { Box,HStack,Heading, Divider,Text,} from '@chakra-ui/react'
import {useDispatch,useSelector} from "react-redux"
import { getCardData } from '../../redux/Cart/action'

const sumPrice=(data)=>{

const res=  Math.round(data&&data.reduce((a,c)=>a+ Number(c.price*c.quantity),0))
return res

}
const summrp=(data)=>{

  const res=  Math.round(data&&data.reduce((a,c)=>a+ Number(c.mrp*c.quantity),0))
  return res
}
const OrderSummary = () => {

   const dispatch=useDispatch()

  
   useEffect(()=>{
    dispatch(getCardData())
 },[])

    const data=useSelector(store=>store.cartReducer.cart)||[]

    const totalprice=sumPrice(data)
    const totalmrp=summrp(data)
    const discount=totalmrp-totalprice


  return (
    <>
    <Box  m="auto" boxShadow='base' p='6' rounded='md' bg='white'>
    <HStack mt={2}>
    <Heading as="h3" size="sm">Order Summary</Heading>
    <Text>({data.length} items)</Text>
    </HStack>
    <HStack mt={2} justifyContent="space-between">
    <Text>
    Total MRP
    </Text>
    <Text color="green.400">
    ₹ {totalmrp}
    </Text>
    </HStack>
    <HStack mt={2} justifyContent="space-between">
    <Text>
    Total Discount
    </Text>
    <Text color="green.400">
     ₹ {discount}
    </Text>
    </HStack>
    <HStack mt={2} justifyContent="space-between">
    <Text>
    Shipping Charges
    </Text>
    <Text color="green.400">
    FREE
    </Text>
    </HStack>
    <Divider m={3} />
    <HStack mt={2} justifyContent="space-between">
    <Heading as="h3" size="sm">
    Payable Amount
    </Heading>
    <Heading as="h3" size="md" >
    ₹ {totalprice}
    </Heading>
    </HStack>
    <Text color="green.400" mt={2}>You will Save ₹{discount} on this order</Text>
      </Box>
    </>
  )
}

export default OrderSummary