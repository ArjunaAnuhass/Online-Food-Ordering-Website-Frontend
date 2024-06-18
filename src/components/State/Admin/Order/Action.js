import { api } from "../../../Config/Api";
import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType"


//update order status
export const updateOrderStatus = ({orderId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_ORDER_STATUS_REQUEST});

        try{
            const response = await api.put(`/api/admin/order/${orderId}/${orderStatus}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            
            const updatedOrder = response.data;

            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS, payload:updatedOrder});
            console.log("updated order status: ", updatedOrder);
        }
        catch(error){
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE, payload:error});
            console.log("error to update order status");
        }
    }
}

//get restaurant orders
export const fetchRestaurantOrder = ({restaurantId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type:GET_RESTAURANT_ORDER_REQUEST});

        try{
            const {data} = await api.get(`/api/admin/order/restaurant/${restaurantId}`, {
                params: {
                    order_status: orderStatus
                },
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            const orders = data;
            
            dispatch({type:GET_RESTAURANT_ORDER_SUCCESS, payload:orders});
            console.log("restaurant orders: ", orders);
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_ORDER_FAILURE, payload:error});
            console.log("error to get restaurant orders", error);
        }
    }
}