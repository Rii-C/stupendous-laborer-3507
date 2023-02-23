import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import {reducer as authReducer} from './Authentication/reducer'
import {reducer as productsReducer} from './Products/reducer'
import {reducer as cartReducer} from './Cart/reducer'
import {reducer as wishlistReducer} from './Wishlist/reducer'
import {reducer as addressReducer} from "./Address/reducer"

const rootReducer = combineReducers({authReducer,productsReducer,cartReducer,wishlistReducer,addressReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
