import React from 'react'
import { Nav } from '../components/Products/Nav'
import styles from '../Styles/Products.module.css'
import { Left } from '../components/Products/Left'
import { Right } from '../components/Products/Right'
import { useSelector,useDispatch } from 'react-redux'
import { GetData } from '../redux/Products/action'
import axios from 'axios'
import { Desclaimer } from '../components/Products/Desclaimer'


export const Products = () => {
const [totalItem,setTotalItem] = React.useState(0)

const [page,setPage] = React.useState(1)
const [limit,setLimit] = React.useState(12)


const dispatch = useDispatch()

React.useEffect(()=>{
  ItemCountData()
dispatch(GetData(page,limit))
},[page,limit])





const ItemCountData = ()=>{
axios.get("http://localhost:8000/product")
.then((res)=>{
// console.log(res.data.length)
setTotalItem(res.data.length)
})
.catch((err)=>{
  console.log(err)
})
}





const {products,isLoading} = useSelector((store)=>{
  return {products:store.productsReducer.products,isLoading:store.productsReducer.isLoading}
})



  return (
    <>
    <nav>
    <Nav/>
    </nav>

<div className={styles.container}>
<Left/>
<Right totalItem={totalItem} page={page} limit={limit} setPage={setPage} setLimit={setLimit} />
</div>

<Desclaimer/>
    </>
  )
}
