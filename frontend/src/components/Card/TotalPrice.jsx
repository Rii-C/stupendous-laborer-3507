import React from 'react'
import {BiMap} from "react-icons/bi"
import { Box,Flex,HStack,VStack,Heading, Divider,Text,Icon,Input,Button,InputGroup,InputRightElement} from '@chakra-ui/react'

const Totalprice = () => {
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

  <Button  w="100%" bg="#00b5b7" >Proceed to Pay </Button>
  </Box>
  <Box w="100%" boxShadow='base' p='6' rounded='md' bg='white'>
<HStack mt={2}>
<Heading as="h3" size="sm">Order Summary</Heading>
<Text>({} items)</Text>
</HStack>
<HStack mt={2} justifyContent="space-between">
<Text>
Total MRP
</Text>
<Text>
₹24,243
</Text>
</HStack>
<HStack mt={2} justifyContent="space-between">
<Text>
Total Discount
</Text>
<Text>
- ₹3,826
</Text>
</HStack>
<HStack mt={2} justifyContent="space-between">
<Text>
Shipping Charges
</Text>
<Text>
FREE
</Text>
</HStack>
<Divider m={3} />
<HStack mt={2} justifyContent="space-between">
<Heading as="h3" size="md">
Payable Amount
</Heading>
<Heading as="h3" size="md" >
₹19,625
</Heading>
</HStack>
  </Box>
  </Flex>
  )
}

export default Totalprice