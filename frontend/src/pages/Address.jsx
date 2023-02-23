import { HStack,Box, Stack, Flex} from '@chakra-ui/react'
import React from 'react'
import AddressForm from '../components/Address/AddressForm'
import OrderSummary from '../components/Card/OrderSummary'

const Address = () => {
  return (
    <Flex direction={{base:"column", md:"row"}} alignItems="center" gap={5}>
    <Box w={{base:"100%"}}>
    <AddressForm/>
    </Box>
    <Box w={{base:"80%"}}>
    <OrderSummary/>
    </Box>
    
    </Flex>
  )
}

export default Address