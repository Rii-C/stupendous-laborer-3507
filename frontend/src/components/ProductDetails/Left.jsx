import React from 'react'
import styles from '../../Styles/ProductDetails/Left.module.css'
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faChevronDown,faCheck } from '@fortawesome/free-solid-svg-icons'


export const Left = () => {

    const [mainImage,setMainImage] = React.useState("")

const {data} = useSelector((store)=>{
    // console.log(store.productDetailsReducer.data.image[0])
 
    return {data:store.productDetailsReducer.data}
})

// if(data){
//     console.log(data.image[0])
 
// }

const HandleUp = ()=>{
    const main = document.getElementById("main")
let width  = main.clientHeight
main.scrollTop  -= width
}

const HandleDown  = ()=>{
    const main = document.getElementById("main")
    let width  = main.clientHeight
    main.scrollTop  += width
}



  return (
    <div className={styles.container}>
        {
            data.image && 
            <div className={styles.carousel}>
                {/* {
                    data.image.length>3 && 
<FontAwesomeIcon onClick={HandleUp}  id='up' className={styles.up} icon={faChevronUp}/>
                } */}
        <div id='main' className={styles.carouselBox}>
            {
                data.image.map((el,index)=>{
                        return <img key={el} onClick={()=>setMainImage(data.image[index])} src={el} alt="el"/>
                })
            }
        </div>
        {
            data.image.length>3 && 
<FontAwesomeIcon onClick={HandleDown} id='down' style={{position:"absolute"}} className={styles.down} icon={faChevronDown}/>
        }

</div>


                }

{
    data.image && 
        <div className={styles.imageContainer}>
<img src={mainImage===""?data.image[0]:mainImage} className={styles.productImage} alt="product image"/>
<div className={styles.benefit}>
<p>Product Benefits</p>
<div>
    <FontAwesomeIcon icon={faCheck}/>
    <span>{data.product_benefits}</span>
</div>
</div>
        </div>
}

        </div>
  )
}
