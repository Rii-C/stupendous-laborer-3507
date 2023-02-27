import styles from '../../Styles/Carousel/PriceSlash.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from 'react-redux'
import { ProductCard } from '../Products/ProductCard'
import { GetData } from '../../redux/Carousel/action'
import React from 'react'

const Recently = ()=>{

    const dispatch = useDispatch()
    const [data,setData] = React.useState([])

    React.useEffect(()=>{
dispatch(GetData)
    },[])
    
    const HandleLeft = ()=>{
        let one = document.getElementById('seven7')
        let width = one.clientWidth
        one.scrollLeft -= width
    }
    
    
    const HandleRight = ()=>{
    let one = document.getElementById('seven7')
    let width = one.clientWidth
one.scrollLeft += width
}

const {carouselData,isLoading}  = useSelector((store)=>{
    return {carouselData:store.carouselReducer.Carousels,isLoading:store.carouselReducer.isLoading}
})

// console.log(carouselData,"this is carouselData")

    return (
<>
<h1 className={styles.head}>TopDeals</h1>
        <div className={styles.container}>
        {/* <div className={styles.left} onClick={HandleLeft}>Left</div> */}
        <FontAwesomeIcon className={styles.left} onClick={HandleLeft} icon={faChevronLeft}/>
        <div id='seven7' className={styles.carousel}>

{carouselData && 
carouselData.map((el,index)=>{
    if(el.code==="top_deals"){
        return <ProductCard key={index} {...el}/>
    }
        
})
}
        </div>

        <FontAwesomeIcon className={styles.right} onClick={HandleRight} icon={faChevronRight}/>
        {/* <div className={styles.right} onClick={HandleRight}>Right</div> */}
        </div>
</>
    )
    
}


export default Recently