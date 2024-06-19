import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType"


const initialState = {
    loading: false,
    error: null,
    ingredients: [],
    ingredientCategory: [],
    update: null
}

export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_INGREDIENT:
            return {
                ...state,
                loading: false,
                error: null,
                ingredients: action.payload,
            };

        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ingredientCategory: action.payload,
            };

        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ingredientCategory: [...state.ingredientCategory, action.payload],
            };

        case CREATE_INGREDIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ingredients: [...state.ingredients, action.payload],
            };

        case UPDATE_STOCK:
            return {
                ...state,
                loading: false,
                error: null,
                update: action.payload,
                ingredients: state.ingredients.map((item) =>
                    item.id === action.payload.id ? action.payload : item)
            }
        

        default:
            return state;
    }
}

export default ingredientReducer;