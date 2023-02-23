
import { HStack,Card,CardBody,Box,Stack,Icon,Text,Divider,CardFooter,Button} from '@chakra-ui/react'
import React, { useEffect ,useState} from 'react'
import {BiHomeCircle}  from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"
import {BiPencil} from "react-icons/bi"

import {useDispatch,useSelector} from "react-redux"
import { getAddress } from '../../redux/Address/action'

const AddressCard = () => {

  const dispatch=useDispatch()

  const Address=useSelector(store=>store.addressReducer.Address)


  useEffect(()=>{
    
    dispatch(getAddress())
  },[])
  
 const{address,city,state,mobile,name,pincode
 }=Address
  return (
    <Box>
    <Card maxW='sm'>
  <CardBody>
  <Text>
  {address}
 </Text>
    <Stack mt='3' spacing='3'>
      <Text>
       {city}, {state}, {pincode}
      </Text>
      <Text>+91 {mobile}</Text>
      <HStack mt={4} justifyContent="space-between" >
      <HStack>
      <Icon as={BiHomeCircle} boxSize={5} />
      <Text>Home</Text>
      </HStack>
      
      <HStack>
      <Icon as={BiPencil} boxSize={5} />
      <Icon as={RiDeleteBin6Line} boxSize={5} />
      </HStack>
      </HStack>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    
      <Button variant='solid' colorScheme='blue' w="100%">
     Deliver Here
      </Button>
    
   
  </CardFooter>
</Card>
</Box>
    
   
  )
}

export default AddressCard