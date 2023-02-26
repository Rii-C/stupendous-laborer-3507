import React from 'react'
import { Nav } from '../components/Products/Nav'
import styles from '../Styles/Products.module.css'
import { Left } from '../components/Products/Left'
import { Right } from '../components/Products/Right'
import { useSelector,useDispatch } from 'react-redux'
import { GetData } from '../redux/Products/action'
import axios from 'axios'
import { Desclaimer } from '../components/Products/Desclaimer'
import { useSearchParams } from 'react-router-dom'


export const Products = () => {
const [totalItem,setTotalItem] = React.useState(0)


const dispatch = useDispatch()
const [searchParams,setSearchParams] = useSearchParams()
const initialSort = searchParams.get("sort")
const initialPage = searchParams.get("page")
const initialLimit = searchParams.get("limit")
const [page,setPage] = React.useState(Number(initialPage) || 1)
const [limit,setLimit] = React.useState(Number(initialLimit) || 12)
const [sortData,setSortData] = React.useState(initialSort || "")


const initialDiscount = searchParams.get("discount")
const initialRating = searchParams.get("rating")
const initialCategory = searchParams.get("category")


// console.log(initialDiscount)
const [discountFilter,setDiscountFilter] = React.useState({
  ischecked:initialDiscount?true:false,
  value:initialDiscount || 0
})

const [ratingFilter,setRatingFilter] = React.useState({
  ischecked:initialRating?true:false,
  value:initialRating || 0
})

const [category,setCategory] = React.useState(initialCategory || [])




const HandleCategory = (e)=>{
  let newCategory = category
  
  if(newCategory.includes(e.target.value)){
      newCategory  = newCategory.filter((el)=>{
          return el!=e.target.value
      })
  }
  else{
  newCategory = [...newCategory,e.target.value]
  }
  
  setCategory(newCategory)
  }
// React.useEffect(()=>{
  // },[search,sort])
  
  
  
  
  React.useEffect(()=>{
    // setSearchParams({sort:sortData,page,limit})
    // __________________--------------------________
    let obj = {}
    if(sortData == "Pricelth" || sortData == "pricehtl" || sortData == "discountlth" || sortData == "discounthtl" || sortData == "ratinghtl" || sortData == "popularity"){
      obj.sort = sortData
    }

    if(page && page>1){
      obj.page = page
    }
    if(limit && limit>12){
      obj.limit = limit
    }
    if(+page*12>totalItem){
      delete obj.page
    }

// const [discountFilter,setDiscountFilter] = React.useState({
//   ischecked:false,
//   value:"20%+And+Above"
// })

if(discountFilter.ischecked && (discountFilter.value==20 || discountFilter.value==40 || discountFilter.value==60)){
  obj.discount = discountFilter.value
}


if(ratingFilter.ischecked && (ratingFilter.value==1 || ratingFilter.value==2 || ratingFilter.value==3 || ratingFilter.value==4)){
  obj.rating = ratingFilter.value
}

if(category.length>0){
  obj.category = category
}

    setSearchParams(obj)

    // ______________________________



  let payload = {
    _page:page,_limit:limit
  }

  if(page*12>totalItem){
    delete payload._page
  }

  let _order="asc"
  let _sort = "name"
  if(sortData=="pricelth"){
_order = "asc"
_sort = "price"
  }
  else if(sortData=="pricehtl"){
    _order="desc"
    _sort = "price"
  }

  else if(sortData=="discountlth"){
    _order = "asc"
    _sort = "discount"
  }

  else if(sortData=="discounthtl"){
    _order="desc"
    _sort = "discount"
  }
  else if(sortData=="ratinghtl"){
    _order="desc"
    _sort = "rating"
  }
  else{
    _order = "asc"
    _sort = "name"
  }
  
payload._order = _order
payload._sort = _sort




if(discountFilter.value==20 || discountFilter.value==40 || discountFilter.value==60){
  payload.discount = discountFilter.value
}


if(ratingFilter.value==1 || ratingFilter.value==2 || ratingFilter.value==3 || ratingFilter.value==4){
  payload.rating = ratingFilter.value
}

if(category.length>0){
  let cat = {}
  for(let i=0; i<category.length; i++){
    
  }
  payload.category = category
}
 


dispatch(GetData(payload))
ItemCountData(payload)


},[page,limit,sortData,discountFilter,ratingFilter,totalItem,category])





const ItemCountData = (payload)=>{
// axios.get("http://localhost:8000/product")
delete payload._limit
delete payload._page
axios({
  method: "get",
  baseURL:"http://localhost:8000/product",
  params:payload
})
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
<Left discountFilter={discountFilter} HandleCategory={HandleCategory} setDiscountFilter={setDiscountFilter}  ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} />
<Right totalItem={totalItem} page={page} limit={limit} setPage={setPage} setLimit={setLimit} sortData={sortData} setSortData={setSortData} />
</div>

<Desclaimer/>
    </>
  )
}
