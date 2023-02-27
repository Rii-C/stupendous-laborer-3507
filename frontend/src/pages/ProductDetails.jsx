import React from 'react'
import { Nav } from '../components/ProductDetails/Nav'
import styles from '../Styles/ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import { GetData } from '../redux/ProductDetails/action'
import {useDispatch,useSelector} from 'react-redux'
import { Left } from '../components/ProductDetails/Left'
import { Right } from '../components/ProductDetails/Right'
import { Description } from '../components/ProductDetails/Description'
import { Navbar } from '../components/Navbar/Navbar'

export const ProductDetails = () => {

  const {id} = useParams()
  const dispatch = useDispatch()

  React.useEffect(()=>{
dispatch(GetData(id))
  },[])


  const {data,isLoading} = useSelector((store)=>{
    return {data:store.productDetailsReducer.data,isLoading:store.productDetailsReducer.isLoading}
  })

 




  return (<>
  <Navbar/>
    <div className={styles.container}>
      <Nav/>
      <div className={styles.Box}>
        <Left/>
        <Right/>
      </div>
    <Description/>
    </div>
  </>
  )
}
