import { api } from "../../Config/Api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

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

//update cart item
export const updateCartItem = ({reqData}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_CART_ITEM_REQUEST});

        try{
            const {data} = await api.put(`/api/cart-item/update`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:UPDATE_CART_ITEM_SUCCESS, payload:data});
            console.log("update cart item successful", data);
        }
        catch(error){
            dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error});
            console.log("error to update cart item", error);
        }
    }
}

//remove cart item
export const removeCartItem = ({cartItem, jwt}) => {
    return async (dispatch) => {
        dispatch({type:REMOVE_CART_ITEM_REQUEST});

        try{
            const {data} = await api.delete(`/api/cart-item/${cartItem}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:REMOVE_CART_ITEM_SUCCESS, payload:data});
            console.log("cart item remove successfully", data);
        }
        catch(error){
            dispatch({type:REMOVE_CART_ITEM_FAILURE, payload:error});
            console.log("error to remove cart item", error);
        }
    }
}

//clear cart items
export const clearCart = () => {
    return async (dispatch) => {
        dispatch({type:CLEAR_CART_REQUEST});

        try{
            const {data} = await api.put(`/api/cart/clear`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            dispatch({type:CLEAR_CART_SUCCESS, payload:data});
            console.log("clear cart successful", data);
        }
        catch(error){
            dispatch({type:CLEAR_CART_FAILURE, payload:error});
            console.log("error to clear cart", error);
        }
    }
}