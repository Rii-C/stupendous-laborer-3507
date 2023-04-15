import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {reducer as carouselReducer} from './Carousel/reducer'
import {IsAuth as authReducer} from './Authentication/reducer'
import {reducer as productsReducer} from './Products/reducer'
import {reducer as productDetailsReducer} from './ProductDetails/reducer'
import {reducer as cartReducer} from './Cart/reducer'
import {reducer as wishlistReducer} from './Wishlist/reducer'
import {reducer as addressReducer} from "./Address/reducer"
import {adminReducer} from "../redux/Admin/Admin.reducer"
import {reducer as orderReducer} from "../redux/Order/reducer"
import {reducer as searchReducer} from './Search/reducer'



const rootReducer = combineReducers({authReducer,productsReducer,productDetailsReducer,cartReducer,wishlistReducer,addressReducer,adminReducer,carouselReducer,orderReducer,searchReducer})



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
