import React from 'react'
import {Box, Center, Flex, Image, center } from '@chakra-ui/react'
import style from '.././Styles/Home/Home.module.css'
import {Navbar} from '.././components/Navbar/Navbar'
import Carousal from '../components/Home/ImgCarousel'
import Carousal2 from '../components/Home/Img2Carousel'
import WhyHealth from '../components/Home/WhyHealth'
import Footer from '../components/footer/Footer'
import Download from '../components/Home/Download'
import HKprim from '../components/Home/HKprim'
import { Link } from 'react-router-dom'
import { Dropdown } from '../components/Navbar/DropDown'
import {useDispatch} from 'react-redux'
import { GetData } from '../redux/Carousel/action'
import FlashSale from '../components/Carousel/FlashSale'
import FitFoodRange from '../components/Carousel/FitFoodRange'
import Personal_care from '../components/Carousel/NewLaunches'
import PickDay from '../components/Carousel/PickDay'
import PriceSlash from '../components/Carousel/PriceSlash'
import Recently from '../components/Carousel/Recently'
import WorkoutEssentials from '../components/Carousel/WorkoutEssentials'
export const Home = () => {
  const dispatch = useDispatch()
  React.useEffect(()=>{
dispatch(GetData)
},[])
  return (
    <>
    <Navbar/>
    <Dropdown/>
    <div className={style.div}>
      <div className={style.text}>App Sale Is Now Live</div>
      <div>
      <Carousal/>
      </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
      <div >
        <FlashSale/>
      </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
      <div className={{width:"100%"}} >
      <Flex width={'80%'} margin="auto" gap='2' >
      <Link to="/products/wheyproteins">
          <Image src ="https://img9.hkrtcdn.com/24442/bnr_2444148_o.png" borderRadius={8}/>
      </Link>
      <Link to="/products/wheyproteins">
          <Image src ="https://img5.hkrtcdn.com/24472/bnr_2447174_o.jpg" borderRadius={8}/>
      </Link>
      <Link to="/products/wheyproteins">
          <Image src ="https://img1.hkrtcdn.com/24442/bnr_2444150_o.jpg" borderRadius={8}/>
      </Link>
      <Link to="/products/wheyproteins">
          <Image src ="https://img5.hkrtcdn.com/24442/bnr_2444154_o.jpg" borderRadius={8}/>
      </Link>
      </Flex>
      </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
        <div>
          <FitFoodRange/>
        </div>
        <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
      <div className={style.divAd} >
        <h1 className={style.H1}>Top Selling Combos</h1>
      <Flex  width={['100%', '50%']}
            margin="auto"
            flexDirection={'row'}
            alignItems="center"
            justifyContent="center"
            gap={[4, 2]} >
          <Image w={"50%"} src ="https://img9.hkrtcdn.com/24441/bnr_2444088_o.jpg" borderRadius={8}/>
          <Image  w={"50%"} src ="https://img1.hkrtcdn.com/24441/bnr_2444090_o.jpg" borderRadius={8}/>
          <Image  w={"50%"} src ="https://img1.hkrtcdn.com/24442/bnr_2444190_o.jpg" borderRadius={8}/>
          <Image  w={"50%"} src ="https://img3.hkrtcdn.com/24442/bnr_2444192_o.jpg" borderRadius={8}/>
      </Flex>
      </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
        <div>
          <Personal_care/>
        </div>
      <div>
        <Box margin={"0px 100px"}>
          <Carousal2/>
        </Box>
      </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
        <div>
          <PickDay/>
        </div>
        <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
      <div>
        <WhyHealth/>
      </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
      <div>
          <WorkoutEssentials/>
        </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
        <div>
          <PriceSlash/>
        </div>
        <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
      <div>
        <Download/>
      </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
        <div>
          <Recently/>
        </div>
        <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
      <div>
        <HKprim/>
      </div>
      <div style={{height:"10px", backgroundColor:"#F4F4F4" }}>
            <hr />
        </div>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}