import {Routes,Route} from 'react-router-dom'
import {Home} from "../pages/Home"
import {Signup} from '../pages/Signup'
import {Login} from '../pages/Login'
import {NotFound} from '../pages/NotFound'
import {Payment} from '../pages/Payment'
import {ProductDetails} from '../pages/ProductDetails'
import {Products} from '../pages/Products'
import {Wishlist} from '../pages/Wishlist'
import {Cart} from '../pages/Cart'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import AddProducts from '../pages/Admin/AddProducts'
import AllProducts from '../pages/Admin/AllProducts'
import Address from '../pages/Address'
import Registering from './Auth/Register'
import Logging from './Auth/Login'



const AllRoutes = ()=>{


return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Registering/>}/>
        <Route path="/login" element={<Logging/>}/>
        <Route path="/products/wheyproteins" element={<Products/>}/>
        <Route path="/products/wheyproteins/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/add" element={<AddProducts/>} />
        <Route path="/admin/products" element={<AllProducts/>} />
        <Route path="*" element={<NotFound/>}/>
    </Routes>
)


}


export default AllRoutes