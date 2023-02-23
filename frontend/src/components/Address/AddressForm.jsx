import { HStack,Input,FormControl,FormLabel, Textarea,Button, Stack } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import reducer from './reducer'
import { addAdress } from './api'

const initialAddress={
    name:"",
    mobile:"",
    address:"",
    landmark:"",
    pincode:""

}


const AddressForm = () => {
 const [addressForm,dispatch]=useReducer(reducer,initialAddress)

 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(addressForm)
  addAdress(addressForm)
  }

 const {name,mobile,address,landmark,pincode}=addressForm
  return (
   <>
   <form onSubmit={handleSubmit}>
   <Stack>
   <HStack>
   <FormControl isRequired>
  <FormLabel>Name </FormLabel>
  <Input placeholder='Enter Name ' value={name} onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})} />
</FormControl>
<FormControl isRequired>
  <FormLabel>Mobile No.</FormLabel>
  <Input placeholder='Enter Mobile No.' type="tel" value={mobile} onChange={(e)=>dispatch({type:"MOBILE",payload:e.target.value})} />
</FormControl>
   </HStack>
   <FormControl isRequired>
  <FormLabel>Address(Area & Street)</FormLabel>
  <Textarea placeholder='Type Your Address' value={address} onChange={(e)=>dispatch({type:"ADDRESS",payload:e.target.value})} />
</FormControl>
<HStack>
   <FormControl >
  <FormLabel>Landmark </FormLabel>
  <Input placeholder='Enter Landmark' value={landmark} onChange={(e)=>dispatch({type:"LANDMARK",payload:e.target.value})}/>
</FormControl>
<FormControl isRequired>
  <FormLabel>Pincode</FormLabel>
  <Input placeholder='Enter pincode' type="number" value={pincode} onChange={(e)=>dispatch({type:"PINCODE",payload:e.target.value})} />
</FormControl>
   </HStack>
   <Button type="submit" w={40}>Save & Deliver</Button>
   </Stack>
   </form>
   </>
  )
}

export default AddressForm