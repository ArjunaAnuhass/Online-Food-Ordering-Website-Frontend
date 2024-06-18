import { api } from "../../Config/Api";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionType"


//create order
export const createOrder = ({reqData}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_ORDER_REQUEST});

        try{
            const {data} = await api.post(`/api/order`, reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:CREATE_ORDER_SUCCESS, payload:data});
            console.log("order created successfully", data);
        }
        catch(error){
            dispatch({type:CREATE_ORDER_FAILURE, payload:error});
            console.log("error to create order", error);
        }
    };
};

//get users order
export const getUsersOrder = ({jwt}) => {
    return async (dispatch) => {
        dispatch({type:GET_USERS_ORDERS_REQUEST});

        try{
            const {data} = await api.get(`/api/order/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_USERS_ORDERS_SUCCESS, payload:data});
            console.log("get users orders: ", data);
        }
        catch(error){
            dispatch({type:GET_USERS_ORDERS_FAILURE, payload:error});
            console.log("error to get users orders", error);
        }
    }
}

