import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../Constants";

export const WishlistReducer=(data=[],action)=>{

    switch (action.type) {
        case ADD_TO_WISHLIST:
        return [...data , action.data]

        case REMOVE_FROM_WISHLIST:
            data.length=data.length&&data.length-1
            return data;
            
    
        default:
            return data;
    }
}