import { api } from "../../Config/Api";
import { GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS } from "./ActionType"


export const getAllRestaurantsAction = (token) => {
    return async (dispatch) => {
        dispatch({type:GET_ALL_RESTAURANT_REQUEST});

        try{
            const {data} = await api.get("/api/restaurant", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            dispatch({type:GET_ALL_RESTAURANT_SUCCESS, payload:data})
        }
        catch(error){
            dispatch({type:GET_ALL_RESTAURANT_FAILURE, payload:error});
            console.log("restaurants find error", error);
        }
    }
}