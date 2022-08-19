import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../Constants";

export const addToWishList = (data) => {
  return {
    type: ADD_TO_WISHLIST,
    data,
  };
};

export const removeFromWishList=(data)=>{
    return{
        type:REMOVE_FROM_WISHLIST,
        data
    }
}
