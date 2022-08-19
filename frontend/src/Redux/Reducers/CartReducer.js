import { ADD_TO_CART, REMOVE_ALL_FROM_CART, REMOVE_TO_CART } from "../Constants";

export const CartReducer=(data=[],action)=>{
switch (action.type) {
    case ADD_TO_CART:
        return[action.data, ...data]
        
    case REMOVE_TO_CART:
        data.length= data.length? data.length-1:[]
        return [...data]
        
    case REMOVE_ALL_FROM_CART:
        return []
 
    default:
        return data;
}
}