import React from 'react'
import {Box,Flex,Image, HStack,Text, VStack,Icon,Show, Divider} from "@chakra-ui/react"
import logo from "../asset/webLogo.png"
import {BsCart, BsMap} from "react-icons/bs"
import {BiMap} from "react-icons/bi"
import {MdPayment} from "react-icons/md"
import { useLocation } from 'react-router-dom'
import {CheckIcon} from "@chakra-ui/icons"
import { Link } from 'react-router-dom'


const CardNavbar = () => {
  const location=useLocation()
  const res=(location.pathname==="/payment");
  const res1=(location.pathname==="/address");
  const res2=(location.pathname==="/cart");

   const bgc=res?"#00b5b7":"blackAlpha.200"
   const bgc1=res1?"#00b5b7":"blackAlpha.200"
   const bgc2=res2?"#00b5b7":"blackAlpha.200"

  return (
   
   
    <Flex justify="center" alignItems="center" m={5} h="100px" mt={5} boxShadow='xs' p='10' rounded='md' bg='white' >
    <Box >
    <Link to="/" style={{cursor:"pointer"}} >
    <Image src={logo} alt="logo"  w={{base:"50%",md:"30%"}}/>
    </Link>
    </Box>
  <Box>
    <Flex justifyContent="space-around" gap={10} >
    <VStack>
    <Box boxShadow='sm' p='2' rounded='3xl' bg={bgc2} > {res2?<BsCart size={20}/>:<CheckIcon size={20}/> } </Box>
    
   <Show above='sm'> 
   <Text size="xs" >Cart</Text></Show>
    </VStack>
 
    <VStack>
    <Box boxShadow='sm' p='2' rounded='3xl' bg={bgc1} > {(res1||res2)?<BiMap size={20}/>:<CheckIcon size={20}/> }   </Box>
   
    <Show above='sm'><Text size="xs">Address</Text></Show>
    </VStack>
    
    <VStack>
    <Box boxShadow='sm' p='2' rounded='3xl' bg={bgc} > <MdPayment size={20}/>   </Box>
    
    <Show above='sm'><Text size="xs">Payment</Text></Show> 
    </VStack>
    
    </Flex>
    </Box>
   
  
    </Flex>
  
  
  )
}

export default CardNavbar