import React from 'react'
import { Container,Heading,Text,Button,Image,Stack } from '@chakra-ui/react'
import { Navigate ,useNavigate} from 'react-router-dom'

const EmptyCart = () => {
    const navigate=useNavigate()

    const handleClick=()=>{
        navigate("/products/wheyproteins")
    }
  return (
    <Stack alignItems="center">
    <Image src="https://static1.hkrtcdn.com/hknext/static/media/cart/empty-cart-new.svg" alt="aky"/>
    <Heading as="h3" size="sm">Hey, it feels so light!</Heading>
    <Text>There is nothing in you bag. Let’s add some items.</Text>
    <Button onClick={handleClick}>Continue Shopping</Button>
    
    </Stack>
  )
}

export default EmptyCart