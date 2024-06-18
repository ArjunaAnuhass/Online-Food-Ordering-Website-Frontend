import { api } from "../../Config/Api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS } from "./ActionType"

//find cart by user 
export const findUserCart = ({jwt}) => {
    return async (dispatch) => {
        dispatch({type:FIND_CART_REQUEST});

        try{
            const {data} = await api.get(`/api/cart`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:FIND_CART_SUCCESS, payload:data});
            console.log("user cart found successfully", data);
        }
        catch(error){
            dispatch({type:FIND_CART_FAILURE, payload:error});
            console.log("error to find the user cart");
        }
    }
}

//add item to cart
export const addItemToCart = ({reqData}) => {
    return async (dispatch) => {
        dispatch({type:ADD_ITEM_TO_CART_REQUEST});

        try{
            const {data} = await api.put(`/api/cart/add`, reqData.cartItem, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data});
            console.log("item added successfully to the cart", data);
        }
        catch(error){
            dispatch({type:ADD_ITEM_TO_CART_FAILURE, payload:error});
            console.log("error to add items to cart", error);
        }
    }
}