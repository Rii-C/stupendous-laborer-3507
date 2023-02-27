import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import OrderSummary from '../components/Card/OrderSummary'
import PaymentTab from '../components/Payment/Tab'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Card/Loading'
import CardNavbar from '../components/Card/CardNavbar'


export const Payment = () => {
  const isLoading=useSelector(store=>store.cartReducer.isLoading)
 
if(isLoading){
  return <Loading/>
}
 
  return (
    <>
    <CardNavbar/>
    <Stack w="90%" m="auto" direction={{base:"column",md:"row"}} gap={{base:"5",md:'0'}} justifyContent="center" alignItems="center">
    <Box w={{base:"100%"}} m="auto" >
    <PaymentTab/>
    </Box>
    <Box w={{base:"100%",lg:"60%"}} m="auto" >
    <OrderSummary/>
    </Box>
    
    
    </Stack>
    </>
  )
}
