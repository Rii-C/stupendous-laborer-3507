import React,{useEffect} from 'react'
import CartBody from '../components/Card/CardBody'
import { Box} from '@chakra-ui/react'
import {useSelector,useDispatch} from "react-redux"

import Loading from '../components/Card/Loading'
import EmptyCart from '../components/Card/EmptyCart'
import { getCardData } from '../redux/Cart/action'
import CardNavbar from '../components/Card/CardNavbar'


export const Cart = () => {
  const isLoading=useSelector(store=>store.cartReducer.isLoading)
  const token=useSelector(store=>store.authReducer.token)
  

  const dispatch=useDispatch()
  console.log(token)
  useEffect(()=>{
    dispatch(getCardData(token))
      },[])
      const cartCount=useSelector(store=>store.cartReducer.cartCount)


 

  

 

  
  // const res=(cart.length===0)
  // console.log(res);

  if(isLoading){
    return <Loading/>
  }

  return (<>
  <CardNavbar/>
      <Box w={{lg:"90%"}} m="auto">
{cartCount>0?<CartBody/>:<EmptyCart/>}
    </Box>
  </>
    
  )
}
