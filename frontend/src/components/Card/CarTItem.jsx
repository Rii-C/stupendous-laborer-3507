import React from 'react'
import { Heading,Text,Image,Card,CardBody,Stack,Icon,Button, HStack } from '@chakra-ui/react'
import {RiDeleteBinLine} from "react-icons/ri"
import {GiSelfLove} from "react-icons/gi"
import {GrFormAdd} from "react-icons/gr"
import {BiMinus} from "react-icons/bi"
import {useDispatch} from "react-redux"
import { deleteItemFromCart ,updateCart} from '../../redux/Cart/action'
const CartItem = ({ele}) => {

  const dispatch=useDispatch()

  const handleDelete=(id)=>{
    console.log(id)

     dispatch(deleteItemFromCart(id))
    
  }

  const increaseQuantity=(data)=>{
         const id=data._id
         const payload={
          "quantity":(data.quantity+1)
         }
         dispatch(updateCart(payload,id))
  }

  const decreaseQuantity=(data)=>{
    const id=data._id
    const payload={
     "quantity":(data.quantity-1)
    }
    dispatch(updateCart(payload,id))

  }
  const res=(ele.quantity===1)
   
  return (
    <Card
  direction="row"
  overflow='hidden'
  variant='outline'
  p={{sm:"20px"}}
  alignItems="center"
>
  <Image
    objectFit='cover'
    w={{base:"30%",sm:"175px"}}
    h={{base:"20%",}}
    src={ele.image[0]}
    alt={ele.name}
  />

  <Stack >
    <CardBody w="100%">
      <Text size='xs' pt={3}>{ele.name}</Text>
      <HStack pt={1}>
      <Heading  as="h5" size="sm">
      ₹{ele.price}
      </Heading>
      <Text size='xs'color="green.400" fontWeight={500} >
       {ele.discount}% OFF
      </Text>
      </HStack>
      <Text pt={2} size='xs'>MRP: {ele.mrp}</Text>
      <HStack gap={1} mt={2}>
      <Button variant='solid' size="xs" bg="blackAlpha.200" colorScheme='gray' isDisabled={res}  onClick={()=>decreaseQuantity(ele)}>
      <Icon as={ BiMinus} boxSize={3}  />
      </Button>
      <Text size="md" color="#00b5b7">{ele.quantity}</Text>
      <Button variant='solid' size="xs" bg="blackAlpha.200" colorScheme='gray' onClick={()=>increaseQuantity(ele)}>
     <Icon as={ GrFormAdd } boxSize={3}  />

      </Button>
    </HStack>

      
    </CardBody>
</Stack>
<HStack mt={-20} p={2}>

<Icon as={RiDeleteBinLine} boxSize={6} m={1} onClick={()=>handleDelete(ele._id)}/>



<Icon as={GiSelfLove} boxSize={6} />

</HStack>
</Card>
  )
}

export default CartItem