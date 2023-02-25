import { Box, HStack,Image,Heading,Text,Checkbox, Stack,Button } from '@chakra-ui/react'
import React,{useState} from 'react'

const CashOnDel = () => {

  const [res,setRes]=useState(false)
  console.log(res)
  const bgc=res?"#00b5b7":"gray"
  return (
    <Stack w={{base:"100%",lg:"80%"}} gap={1}>
    <Box boxShadow='lg' p='6' rounded='md' bg='white'>
    
   
    <HStack alignItems="center" gap={1}>
    <Image src="https://static1.hkrtcdn.com/hknext/static/media/payment/cod-inner.svg" alt="cod"/>
    <Heading as="h4" size="sm">
    CASH ON DELIVERY</Heading>
   
    </HStack>
    <Text pl={12}>
    You will not earn any HK Cash through COD
    </Text>
   
    </Box>
    <Box boxShadow='lg' p='6' rounded='md' bg='orange.100'>
    
    <Heading as="h4" size="sm" >
    Sure about the address?
    </Heading>
    <HStack alignItems="center" gap={1}>
    <Checkbox colorScheme='blue' type="twitter" bg="white" isChecked={res} onChange={()=>setRes(!res)}/>
    <Text >
    Check the box here to confirm & complete your purchase through Cash On Delivery option.
    </Text>
   
    </HStack>
   </Box>
   <Button w={{base:"100%",lg:"50%"}} isDisabled={!res} bg={bgc} >Confirm Order</Button>
    </Stack>
  )
}

export default CashOnDel