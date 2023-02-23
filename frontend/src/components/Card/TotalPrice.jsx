import React from 'react'
import {BiMap} from "react-icons/bi"
import { Box,Flex,HStack,VStack,Heading, Divider,Text,Icon,Input,Button,InputGroup,InputRightElement} from '@chakra-ui/react'
import OrderSummary from './OrderSummary'
const sumPrice=(data)=>{

const res=  Math.round(data&&data.reduce((a,c)=>a+ Number(c.price*c.quantity),0))
return res

}
const summrp=(data)=>{

  const res=  Math.round(data&&data.reduce((a,c)=>a+ Number(c.mrp*c.quantity),0))
  return res
  
  }


const Totalprice = ({data}) => {

  console.log(sumPrice(data),summrp(data))
  const totalprice=sumPrice(data)
  const totalmrp=summrp(data)
  const discount=totalmrp-totalprice


  return (
  <Flex direction="column" gap={10}>
  <Box  boxShadow='base' p='2' rounded='md' bg='white'>
 <Flex justifyContent="space-between" gap={5}>
  <HStack mt={2}>
  <Icon as={BiMap}/> <Text> Delivery to</Text><Text fontWeight={500}> 227412, SULTANPUR </Text>
  </HStack>
  <Button bg="whiite" color="#00b5b7">Change</Button>
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

  <Button  w="100%" bg="#00b5b7" >Proceed to Pay ₹{totalprice}</Button>
  </Box>
  <Box>
<OrderSummary/>
  </Box>

  </Flex>
  )
}

export default Totalprice