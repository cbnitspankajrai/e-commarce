import { ADD_TO_CART, REMOVE_ALL_FROM_CART, REMOVE_TO_CART } from "../Constants"

export const addToCart=(data)=>{
    return{
        type:ADD_TO_CART,
        data
    }
}

export const removeToCart=()=>{
    console.log("remove to cart")
    return{
        type:REMOVE_TO_CART
    }
}

export const removeAllFromCart=()=>{
    console.log("remove all from cart")
    return{
        type:REMOVE_ALL_FROM_CART
    }
}

