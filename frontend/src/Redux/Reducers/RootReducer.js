import { combineReducers } from "redux";
import  {CartReducer}  from "./CartReducer";
import  {WishlistReducer}  from "./WishlistReducer";

export default combineReducers({
    CartReducer,WishlistReducer
})