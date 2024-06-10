import { api } from "../../Config/Api";
import { CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"


//get all restaurant

export const getAllRestaurantsAction = (token) => {
    return async (dispatch) => {
        dispatch({type:GET_ALL_RESTAURANT_REQUEST});

        try{
            const {data} = await api.get("/api/restaurants", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            dispatch({type:GET_ALL_RESTAURANT_SUCCESS, payload:data})
            console.log("get all restaurants success", data);
        }
        catch(error){
            dispatch({type:GET_ALL_RESTAURANT_FAILURE, payload:error});
            console.log("restaurants find error", error);
        }
    }
}

//get restaurant by id

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({type:GET_RESTAURANT_BY_ID_REQUEST});

        try{
            const response = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            dispatch({type:GET_RESTAURANT_BY_ID_SUCCESS, payload:response.data})
            console.log("restaurant by id success", response.data)
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_BY_ID_FAILURE, payload:error});
            console.log("error to get restaurant by Id ", error)
        }
    }
}

//get restaurant by user id

export const getRestaurantByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({type:GET_RESTAURANT_BY_USER_ID_REQUEST});

        try{
            const {data} = await api.get(`/api/admin/restaurant/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            dispatch({type:GET_RESTAURANT_BY_USER_ID_SUCCESS, payload:data});
            console.log("get restaurant by user id success", data);
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_BY_USER_ID_FAILURE, payload:error});
            console.log("error to find restaurant by user id", error);
        }
    }
}

//create restaurant

export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({type:CREATE_RESTAURANT_REQUEST});

        try{
            const {data} = await api.post(`/api/admin/restaurant`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            })
            dispatch({type:CREATE_RESTAURANT_SUCCESS, payload:data});
            console.log("restaurant created successful", data)
        }
        catch(error){
            dispatch({type:CREATE_RESTAURANT_FAILURE, payload:error});
            console.log("error to create restaurant", error);
        }
    }
}

//update restaurant

export const updateRestaurant = (restaurantId, restaurantData, jwt) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_RESTAURANT_REQUEST});

        try{
            const response = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type:UPDATE_RESTAURANT_SUCCESS, payload:response.data});
            console.log("restaurant updated successful", response.data);
        }
        catch(error){
            dispatch({type:UPDATE_RESTAURANT_FAILURE, payload:error});
            console.log("error to update restaurant", error);
        }
    }
}

//delete restaurant

export const deleteRestaurant = (restaurantId, jwt) => {
    return async (dispatch) => {
        dispatch({type:DELETE_RESTAURANT_REQUEST});

        try{
            const response = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({type:DELETE_RESTAURANT_SUCCESS, payload:response.data});
            console.log("restaurant deleted successfully", response.data)
        }
        catch(error){
            dispatch({type:DELETE_RESTAURANT_FAILURE, payload:error});
            console.log("delete restaurant error", error);
        }
    }
}

//update restaurant status

//create event 

//get all events

//delete events

//get restaurant events

//create category

//get restaurant