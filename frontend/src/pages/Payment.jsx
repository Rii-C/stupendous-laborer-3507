import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import OrderSummary from '../components/Card/OrderSummary'
import PaymentTab from '../components/Payment/Tab'

export const Payment = () => {
  return (
    <Stack w="90%" m="auto" direction={{base:"column",md:"row"}} gap={{base:"5",md:'0'}} justifyContent="center" alignItems="center">
    <Box w={{base:"100%"}} m="auto" >
    <PaymentTab/>
    </Box>
    <Box w={{base:"100%",lg:"60%"}} m="auto" >
    <OrderSummary/>
    </Box>
    
    
    </Stack>
  )
}
