import React from 'react'
import {BiMap} from "react-icons/bi"
import { Box,Flex,HStack,VStack,Heading, Divider,Text,Icon,Input,Button,InputGroup,InputRightElement} from '@chakra-ui/react'

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
  <Box w="100%" boxShadow='base' p='6' rounded='md' bg='white'>
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
<Heading as="h3" size="md">
Payable Amount
</Heading>
<Heading as="h3" size="md" >
₹ {totalprice}
</Heading>
</HStack>
<Text color="green.400" mt={2}>You will Save ₹{discount} on this order</Text>
  </Box>
  </Flex>
  )
}

export default Totalprice