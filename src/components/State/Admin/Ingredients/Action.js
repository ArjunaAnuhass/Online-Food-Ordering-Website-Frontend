import { api } from "../../../Config/Api"
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType";


//get all ingredients by restaurant id
export const getIngredientsOfRestaurant = ({restaurantId, jwt}) => {
    return async (dispatch) => {

        try{
            const response = await api.get(`/api/admin/ingredients/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_INGREDIENT, payload:response});
            console.log("get all restaurant ingredients: ", response);
        }
        catch(error){
            console.log("error to get restaurant ingredients", error);
        }
    }
}

//create ingredients
export const createIngredients = ({data, jwt}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_INGREDIENT_REQUEST});

        try{
            const response = await api.post(`/api/admin/ingredients/ingredientItems`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_INGREDIENT_SUCCESS, payload:response});
            console.log("ingredients created successful", response.data);
        }
        catch(error){
            dispatch({type:CREATE_INGREDIENT_FAILURE, payload:error});
            console.log("error to create ingredient items", error);
        }
    }
}

//create ingredient category
export const createIngredientCategory = ({data, jwt}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_INGREDIENT_CATEGORY_REQUEST});

        try{
            const response = await api.post(`/api/admin/ingredients/ingredientCategory`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS, payload:response.data});
            console.log("ingredient category created successful", response.data);
        }
        catch(error){
            dispatch({type:CREATE_INGREDIENT_CATEGORY_FAILURE, payload:error});
            console.log("error to create ingredient category", error);
        }
    }
}

//get ingredient category
export const getIngredientCategory = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:GET_INGREDIENT_CATEGORY_REQUEST});

        try{
            const response = await api.get(`/api/admin/ingredients/restaurant/${restaurantId}/ingredientCategory`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS, payload:response.data});
            console.log("ingredient category: ", response.data);
        }
        catch(error){
            dispatch({type:GET_INGREDIENT_CATEGORY_FAILURE, payload:error});
            console.log("error to get ingredient category by restaurant id", error);
        }
    }
}

//update ingredient item stock
export const updateStockOfIngredients = ({ingredientId, jwt}) => {
    return async (dispatch) => {
        
        try{
            const {data} = await api.put(`/api/admin/ingredients/${ingredientId}/stock`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_STOCK, payload:data});
            console.log("ingredient stock updated...", data);
        }
        catch(error){
            console.log("error to update stock in ingredient item", error);
        }
    }
}