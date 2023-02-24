import { HStack,Box, Stack, Flex} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import AddressForm from '../components/Address/AddressForm'
import OrderSummary from '../components/Card/OrderSummary'
import AddressCard from '../components/Address/AddressCard'
import { useDispatch,useSelector } from 'react-redux'
import { getAddress,addAddress } from '../redux/Address/action'
const initialAddress={
  name:"",
  mobile:"",
  address:"",
  landmark:"",
  pincode:"",
  city:"",
  state:""

}


const Address = () => {

  const dispatch=useDispatch()

  const handleSubmit=(e,data)=>{
    e.preventDefault()
   dispatch(addAddress(data))
    
    }

  useEffect(()=>{
    dispatch(getAddress())
  },[])

  const Address=useSelector(store=>store.addressReducer.Address)
  console.log(Address)

 const res=(Address.length==0)


  return (
    <Flex direction={{base:"column", md:"row"}}  gap={10} justifyContent="center">
    <Box w="100%" m="auto">
    {res?<AddressForm handleSubmit={handleSubmit} initialAddress={initialAddress} />:<AddressCard/>}
    </Box>
    <Box w={{base:"80%"}} m="auto">
   <OrderSummary/>
    </Box>
    
    </Flex>
  )
}

export default Address