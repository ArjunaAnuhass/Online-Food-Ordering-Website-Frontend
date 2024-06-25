import { api } from "../../Config/Api";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, UPDATE_MENU_ITEM_AVAILABILITY_REQUEST, UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS } from "./ActionType"

//create food api
export const createMenuItem = ({jwt, menu}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_MENU_ITEM_REQUEST});

        try{
            const {data} = await api.post(`/api/admin/food/createFood`, menu, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_MENU_ITEM_SUCCESS, payload:data});
            console.log("food created", data);
        }
        catch(error){
            dispatch({type:CREATE_MENU_ITEM_FAILURE, payload:error});
            console.log("error to create menu", error);
        }
    }
}

//get foods by restaurant id
export const getMenuItemByRestaurantId = ({restaurantId, vegetarian, nonVeg, seasonal, foodCategory, jwt}) => {
    return async (dispatch) => {
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});

        try{
            const {data} = await api.get(`/api/food/restaurant/${restaurantId}?vegetarian=${vegetarian}&nonVeg=${nonVeg}&seasonal=${seasonal}&food_category=${foodCategory}`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload:data});
            console.log("get menu by restaurant id success", data);
        }
        catch(error){
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload:error});
            console.log("error to get menu item by restaurant id", error);
        }
    }
}

//search food by name
export const searchMenuItems = ({keyword, jwt}) => {
    return async (dispatch) => {
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});

        try{
            const {data} = await api.get(`/api/food/search?name=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS, payload:data})
        }
        catch(error){
            dispatch({type:SEARCH_MENU_ITEM_FAILURE, payload:error});
            console.log("error to search food by name", error);
        }
    }
}

//update food availability
export const updateMenuItemAvailability = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_REQUEST});

        try{
            const {data} = await api.put(`/api/admin/food/updateStatus/${foodId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS, payload:data});
            console.log("food availability status updated successfully", data);
        }
        catch(error){
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, payload:error});
            console.log("error to update status of food availability", error);
        }
    }
}

//delete food 
export const deleteMenuItem = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:DELETE_MENU_ITEM_REQUEST});

        try{
            const {data} = await api.delete(`/api/admin/food/${foodId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:DELETE_MENU_ITEM_SUCCESS, payload:data})
        }
        catch(error){
            dispatch({type:DELETE_MENU_ITEM_FAILURE, payload:error});
            console.log("food delete error", error);
        }
    }
}