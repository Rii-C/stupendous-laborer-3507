import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../../Styles/ProductDetails/Nav.module.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


export const Nav = () => {

  const {data,isLoading} = useSelector((store)=>{
    return {data:store.productDetailsReducer.data,isLoading:store.productDetailsReducer.isLoading}
  })

  // React.useEffect(()=>{

  //   const name = data.name
  //   let newName = ""
  //   console.log(name)
  //   for(let i=0; i<name.length; i++){
  //       if(name[i]==","){
  //           break;
  //         }
  //         newName += name[i]
  //       }
  //     },[])


  return (
  <div className={styles.container}>
<Link to="/">
<FontAwesomeIcon className={styles.home} icon={faHouse}/> 
</Link>
   <FontAwesomeIcon className={styles.right} icon={faChevronRight}/>
    <span className={styles.span}>
    Sports Nutrition
    </span>

    <FontAwesomeIcon className={styles.right} icon={faChevronRight}/>

    <span  className={styles.span}>
    Proteins
    </span>

    
    <FontAwesomeIcon className={styles.right} icon={faChevronRight}/>

    <Link to='/products/wheyproteins' className={styles.span}>
    Whey Proteins
    </Link>

    <FontAwesomeIcon className={styles.right} icon={faChevronRight}/>

    <span className={styles.current}>
    {data.name}
    </span>
    
  </div>
  )
}
