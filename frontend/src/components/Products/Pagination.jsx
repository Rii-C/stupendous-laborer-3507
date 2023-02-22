import React from 'react'
import styles from '../../Styles/Products/Pagination.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export const Pagination = ({totalItem,page,limit,setPage,setLimit}) => {

const [totalButton,setTotalButton] = React.useState([])


let x = Math.ceil(Number(totalItem)/Number(limit))
let arr = []
for(let i=0; i<x;i++){
arr.push(i+1)
}



  return (
    <div className={styles.container}>
  
  {
    page==1 ? <FontAwesomeIcon style={{background:page==1?"#c2edee":"#00b5b7",borderColor:page==1?"#c2edee":"#00b5b7"}} className={styles.btn} type="button"  icon={faChevronLeft}  /> :

<FontAwesomeIcon style={{background:page==1?"#c2edee":"#00b5b7",borderColor:page==1?"#c2edee":"#00b5b7"}} className={styles.btn} type="button"  icon={faChevronLeft} onClick={()=>setPage(page-1)} />
  }

   
{arr.map((el)=>{
return <button key={el}  style={{background:page==el?"#00b5b7":"white",borderColor:page==el?"#00b5b7":"#00b5b7"}} className={styles.current}>{el}</button>
})}

{
    page==x? <FontAwesomeIcon style={{background:page==x?"#c2edee":"#00b5b7",borderColor:page==x?"#00b5b7":"#c2edee"}} className={styles.btn} icon={faChevronRight} />
 :
    <FontAwesomeIcon style={{background:page==x?"#c2edee":"#00b5b7",borderColor:page==x?"#00b5b7":"#c2edee"}} className={styles.btn} icon={faChevronRight} onClick={()=>setPage(page+1)}/>
}
    </div>



   )
}
