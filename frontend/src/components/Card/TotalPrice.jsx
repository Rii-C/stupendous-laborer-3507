import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {BiMap} from "react-icons/bi"
import { Box,Flex,HStack,Text,Icon,Input,Button,InputGroup,InputRightElement,useToast} from '@chakra-ui/react'
import OrderSummary from './OrderSummary'
import { getAddress } from '../../redux/Address/action'
import { useNavigate } from 'react-router-dom'



const sumPrice=(data)=>{

const res=  Math.round(data&&data.reduce((a,c)=>a+ Number(c.price*c.quantity),0))
return res

}
const summrp=(data)=>{

  const res=  Math.round(data&&data.reduce((a,c)=>a+ Number(c.mrp*c.quantity),0))
  return res
  
  }


const Totalprice = ({data}) => {
  const toast=useToast()
  const navigate=useNavigate()
  const dispatch=useDispatch()
   const token=useSelector(store=>store.authReducer.token)
  // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2M2Y2NmU1YThlZDZkNmEwMDU1MDY4ZjIiLCJpYXQiOjE2Nzc0MTUyMTN9.oZkzJSpa-K3tpJOzpx1GwJgf8Q53oZUEZ818XXyev70"
  // console.log(token)
  useEffect(()=>{
    dispatch(getAddress(token))
   
  },[])

  const Address=useSelector(store=>store.addressReducer.Address)

const handleClick=()=>{
  navigate("/address")
}
  

  // console.log(sumPrice(data),summrp(data))
  const totalprice=sumPrice(data)

  let res=false
  if(data.length===0){
    res=true
  }
  
  


  return (
  <Flex direction="column" gap={10}>
  <Box  boxShadow='base' p='2' rounded='md' bg='white'>
 <Flex justifyContent="space-between" gap={5}>
  <HStack mt={2}>
  <Icon as={BiMap}/> <Text> Delivery to { Address[0]?.pincode}, {Address[0]?.city}, {Address[0]?.state}</Text>
  </HStack>
  
  </Flex>
  </Box>
  <Box>
  <InputGroup >
  <Input 
  
    
    placeholder='Enter Coupon Here'
  />
  <InputRightElement mx={2} >
    <Button  >
    apply
    </Button>
  </InputRightElement>
</InputGroup>
  </Box>
  <Box bg="#00b5b7" p={2} borderRadius={5}>

  <Button  w="100%" isDisabled={res} bg="#00b5b7" onClick={handleClick} >   Proceed to Pay ₹{totalprice}</Button>
  </Box>
  <Box>
<OrderSummary/>
  </Box>

  </Flex>
  )
}

export default Totalprice